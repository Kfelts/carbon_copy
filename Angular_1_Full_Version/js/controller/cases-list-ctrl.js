(function () {
  "use strict";
  angular.module("firmApp").controller("casesListCtrl", casesListCtrl);
  /**
   * callLogListCtrl - Controller for Call Log
   * Display call logs
   */
  function casesListCtrl(
    $scope,
    $translate,
    $rootScope,
    $uibModal,
    restHttpRequestGet,
    $stateParams,
    SweetAlert,
    $http,
    $q,
    restHttpRequest,
    notify,
    $timeout,
    $filter,
    $localStorage
  ) {
    notify.config({ duration: 5000 });
    $scope.formData = {};

    $scope.type = $stateParams.type;
    $scope.status = $stateParams.status;

    $scope.$storage = $localStorage.$default({
      casesList_searchTerm: "",
      casesList_caseStatus: "ALL_OPEN",
      casesList_caseDeadline: "0",
      casesList_startDate: null,
      casesList_endDate: null,
      casesList_sort: "created_at,DESC",
      casesList_selectedStaff: [],
    });

    let url = "/api/cases/search";
    $scope.bHideMyCases = false;

    if ($scope.type == "user") {
      url = "/api/cases/my/search";
      $scope.bHideMyCases = true;
    }

    $scope.usersData = $scope.$storage.casesList_selectedStaff;
    $scope.searchTerm = $scope.$storage.casesList_searchTerm;
    $scope.searchTermString = $scope.$storage.casesList_searchTerm;
    $scope.caseStatus = $scope.$storage.casesList_caseStatus;
    $scope.caseDeadline = $scope.$storage.casesList_caseDeadline;

    $scope.searchCase = setCaseStatus($scope.caseStatus);
    $scope.searchDeadline = setCaseDeadline($scope.caseDeadline);

    $scope.searchTime = "All Time";
    let allTime = moment().subtract(10, "years");
    if (
      $scope.$storage.casesList_startDate != null &&
      $scope.$storage.casesList_endDate != null
    ) {
      $scope.startDateString = $scope.$storage.casesList_startDate;
      $scope.endDateString = $scope.$storage.casesList_endDate;
    } else {
      $scope.startDateString = moment()
        .subtract(5, "years")
        .format("YYYY-MM-DD");
      $scope.endDateString = moment().format("YYYY-MM-DD");
    }

    function onChange() {
      // console.log("testCalls");
      $scope.searchCases();
    }

    $scope.usersDatasource = getUsersData();
    $scope.usersOptions = {
      placeholder: "Select users...",
      dataTextField: "name",
      dataValueField: "id",
      valuePrimitive: true,
      autoBind: true,
      dataSource: $scope.usersDatasource,
      change: onChange,
    };

    $scope.title = getCasesType($stateParams.status, $stateParams.type);
    $scope.icon = getCaseTypeIcon($stateParams.type);

    $scope.caseStatusesDataSource = getCaseStatusCustom($translate);
    // $scope.caseStatusesOptions = getCaseStatusCustomOptions($translate, notify, $scope);
    $scope.caseStatusesDataSource.read();

    $scope.showCaseListItem = function (value) {
      let tempData = [];

      if (tempData.length == 0) {
        for (
          let csCounter = 0;
          csCounter < $scope.caseStatusesDataSource.data().length;
          csCounter++
        ) {
          tempData.push($scope.caseStatusesDataSource.data()[csCounter]);
        }
      }

      let testValue = tempData.findIndex((x) => x.name === value);

      if (testValue != -1) {
        return true;
      }
    };

    // $scope.casesData = getCasesData($stateParams.status, $stateParams.type);
    $scope.casesData = getCasesPagingData(url, $filter, $translate, $scope);
    $scope.casesOptions = getCases($translate, notify, $scope);
    $scope.casesGridOptions = getCasesGrid(
      $scope.casesData,
      $translate,
      $scope,
      $timeout,
      $rootScope
    );

    function caseIdFilter(element) {
      element.kendoAutoComplete({
        dataSource: caseId,
      });
    }

    $scope.editCasesRecordGrid = function (id) {
      let myDataPromiseCaseEdit = restHttpRequestGet.getData(
        "/api/case/" + id,
        "GET",
        $http,
        $q
      );

      // Once successfully returned from server, start setting Result Types for Profiles
      myDataPromiseCaseEdit.then(
        function (response) {
          // this will only run after $http completes
          let dataItemObject = assignObjectData(response);

          let modalInstance = $uibModal.open({
            templateUrl: "views/cases_add_modal.html",
            size: "custom-lg",
            backdrop: "static",
            keyboard: true,
            resolve: {
              dataItemObject: function () {
                return dataItemObject;
              },
            },
            controller: casesSaveCtrl,
          });
        },
        function (error) {}
      );
    };

    $scope.statusCasesAction = function (id, newStatus) {
      // var dataItemObject = getDataItemObject(id, "gridCases");

      // $scope.formData.id = dataItemObject;
      // $scope.formData.caseStatus = newStatus;
      var dataItemObject = {};
      dataItemObject.id = id;
      dataItemObject.caseStatus = newStatus;

      var modalInstance = $uibModal.open({
        templateUrl: "views/cases_status_add_modal.html",
        size: "lg",
        backdrop: "static",
        keyboard: true,
        resolve: {
          dataItemObject: function () {
            return dataItemObject;
          },
        },
        controller: casesStatusSaveCtrl,
      });
    };

    $scope.openCasesArchivedAction = function (id, status) {
      var dataItemObject = getDataItemObject(id, "gridCases");

      SweetAlert.swal(
        {
          title: $translate.instant("ARE_YOU_SURE"),
          text: $translate.instant(status) + " " + dataItemObject.caseNumber,
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText:
            $translate.instant("YES") + " " + $translate.instant(status),
          cancelButtonText: $translate.instant("NO_CANCEL_PLEASE"),
          closeOnConfirm: false,
          closeOnCancel: false,
        },
        function (isConfirm) {
          if (isConfirm) {
            $("button.confirm").prop("disabled", true);
            var newStatus = "activate";

            if (status == "ACTIVE") {
              newStatus = "deactivate";
            }
            var url = "/api/case/" + id + "/deactivate";

            // Post to Server
            var myDataPromise = restHttpRequest.getData(
              dataItemObject,
              url,
              "GET",
              $http,
              $q
            );

            // Once successfully returned from server, start setting Result Types for Profiles
            myDataPromise.then(
              function (response) {
                // this will only run after $http completes
                $("button.confirm").removeAttr("disabled");
                // console.log("RESPONSE: " + response);
                // deleteToGrid('gridTasks', dataItemObject, $scope);
                SweetAlert.swal(
                  $translate.instant("ARCHIVED"),
                  $translate.instant("ARCHIVED_CASE_HAS_BEEN"),
                  "success"
                );
              },
              function (error) {
                $("button.confirm").removeAttr("disabled");
                SweetAlert.swal(
                  $translate.instant("CANCELLED"),
                  $translate.instant("NOTHING_WAS_CHANGED"),
                  "error"
                );
              }
            );

            // // var response = deleteEvent(dataItemObject.id, $http);
            // console.log("RESPONSE: " + response);
            // if (response) {
            //
            // } else {
            //
            // }
          } else {
            SweetAlert.swal(
              $translate.instant("CANCELLED"),
              $translate.instant("NOTHING_WAS_CHANGED"),
              "error"
            );
          }
        }
      );
    };

    $scope.openSearchCase = function (value) {
      $scope.searchCase = value;
      $scope.searchCases();
    };

    $scope.openDeadlineCase = function (value) {
      $scope.searchDeadline = value;
      $scope.searchCases();
    };

    // $scope.startDate = new Date();
    // $scope.endDate = new Date();

    $scope.openSearchTime = function (value) {
      $scope.searchTime = value;
    }; //

    $scope.searchCases = function (value) {
      // console.log("searchCases:",$scope.datePicker.date);
      $scope.bPage = true;

      $scope.caseStatus = getCaseStatus($scope.searchCase);
      $scope.caseDeadline = getCaseDeadline($scope.searchDeadline);

      // console.log("Date Range Start " + moment($scope.datePicker.date.startDate).format('YYYY-MM-DD'));
      // console.log("Date Range End " + moment($scope.datePicker.date.endDate).format('YYYY-MM-DD'));
      $scope.startDateString = moment($scope.datePicker.date.startDate).format(
        "YYYY-MM-DD"
      );
      $scope.endDateString = moment($scope.datePicker.date.endDate).format(
        "YYYY-MM-DD"
      );

      if ($scope.searchTerm != null && $scope.searchTerm.length == 0) {
        $scope.searchTermString = null;
      } else {
        $scope.searchTermString = $scope.searchTerm;
      }

      // Set Local Storage
      $scope.$storage.casesList_selectedStaff = $scope.usersData;
      $scope.$storage.casesList_searchTerm = $scope.searchTermString;
      $scope.$storage.casesList_caseStatus = $scope.caseStatus;
      $scope.$storage.casesList_caseDeadline = $scope.caseDeadline;
      $scope.$storage.casesList_startDate = $scope.startDateString;
      $scope.$storage.casesList_endDate = $scope.endDateString;

      $scope.casesGridOptions.dataSource.read();
      $scope.casesGridOptions.dataSource.data();
    };

    function getCaseStatus(value) {
      // OPEN, CLOSED, ARCHIVED, FILED, APPROVED, RFE_RECEIVED, RFE_RESPONSE_SENT, REJECTED, DELETED
      let retStatus = "ALL";
      switch (value) {
        case "All Cases":
          retStatus = "ALL";
          break;
        case "Active Cases":
          retStatus = "ALL_OPEN";
          break;
        case "Admin Closed":
          retStatus = "ADMIN_CLOSED";
          break;
        case "Archived":
          retStatus = "ARCHIVED";
          break;
        case "Approved":
          retStatus = "APPROVED";
          break;
        case "Closed":
          retStatus = "CLOSED";
          break;
        case "Deferred Action Granted":
          retStatus = "DEFERRED_ACTION_GRANTED";
          break;
        case "Deleted":
          retStatus = "DELETED";
          break;
        case "Denied":
          retStatus = "DENIED";
          break;
        case "Dismissed":
          retStatus = "DISMISSED";
          break;
        case "Document Qualified NVC":
          retStatus = "DOCUMENT_QUALIFIED_NVC";
          break;
        case "Filed":
          retStatus = "FILED";
          break;
        case "Further Action Needed":
          retStatus = "FURTHER_ACTION_NEEDED";
          break;
        case "Open":
          retStatus = "OPEN";
          break;
        case "Pending":
          retStatus = "PENDING";
          break;
        case "Pending Decision":
          retStatus = "PENDING_AWAITING_DECISION";
          break;
        case "Pending Interview":
          retStatus = "PENDING_AWAITING_INTERVIEW";
          break;
        case "Pending Individual Hearing":
          retStatus = "PENDING_INDIVIDUAL_HEARING";
          break;
        case "Pending Master Hearing":
          retStatus = "PENDING_MASTER_HEARING";
          break;
        case "Pending Receipt Received":
          retStatus = "PENDING_RECEIPT_RECEIVED";
          break;
        case "Receipt Received":
          retStatus = "RECEIPT_RECEIVED";
          break;
        case "Referred":
          retStatus = "REFERRED";
          break;
        case "Rejected":
          retStatus = "REJECTED";
          break;
        case "RFE Received":
          retStatus = "RFE_RECEIVED";
          break;
        case "RFE Response Sent":
          retStatus = "RFE_RESPONSE_SENT";
          break;
        case "Stop Work":
          retStatus = "STOP_WORK";
          break;
        case "Temporary Protective Status":
          retStatus = "TEMPORARY_PROTECTED_STATUS";
          break;
        case "Withdrawing":
          retStatus = "WITHDRAWING";
          break;
        case "Withdrawn":
          retStatus = "WITHDRAWN";
          break;
      }
      return retStatus;
    }

    function setCaseStatus(value) {
      // OPEN, CLOSED, ARCHIVED, FILED, APPROVED, RFE_RECEIVED, RFE_RESPONSE_SENT, REJECTED, DELETED
      let retStatus = "All Cases";
      switch (value) {
        case "ALL":
          retStatus = "All Cases";
          break;
        case "ALL_OPEN":
          retStatus = "Active Cases";
          break;
        case "ADMIN_CLOSED":
          retStatus = "Admin Closed";
          break;
        case "ARCHIVED":
          retStatus = "Archived";
          break;
        case "APPROVED":
          retStatus = "Approved";
          break;
        case "CLOSED":
          retStatus = "Closed";
          break;
        case "DEFERRED_ACTION_GRANTED":
          retStatus = "Deferred Action Granted";
          break;
        case "DELETED":
          retStatus = "Deleted";
          break;
        case "DENIED":
          retStatus = "Denied";
          break;
        case "DISMISSED":
          retStatus = "Dismissed";
          break;
        case "DOCUMENT_QUALIFIED_NVC":
          retStatus = "Document Qualified NVC";
          break;
        case "FURTHER_ACTION_NEEDED":
          retStatus = "Further Action Needed";
          break;
        case "FILED":
          retStatus = "Filed";
          break;
        case "OPEN":
          retStatus = "Open";
          break;
        case "PENDING":
          retStatus = "Pending";
          break;
        case "PENDING_AWAITING_DECISION":
          retStatus = "Pending Decision";
          break;
        case "PENDING_AWAITING_INTERVIEW":
          retStatus = "Pending Interview";
          break;
        case "PENDING_INDIVIDUAL_HEARING":
          retStatus = "Pending Individual Hearing";
          break;
        case "PENDING_MASTER_HEARING":
          retStatus = "Pending Master Hearing";
          break;
        case "PENDING_RECEIPT_RECEIVED":
          retStatus = "Pending Receipt Received";
          break;
        case "RECEIPT_RECEIVED":
          retStatus = "Receipt Received";
          break;
        case "REFERRED":
          retStatus = "Referred";
          break;
        case "REJECTED":
          retStatus = "Rejected";
          break;
        case "RFE_RECEIVED":
          retStatus = "RFE Received";
          break;
        case "RFE_RESPONSE_SENT":
          retStatus = "RFE Response Sent";
          break;
        case "STOP_WORK":
          retStatus = "Stop Work";
        case "TEMPORARY_PROTECTED_STATUS":
          retStatus = "Temporary Protective Status";
        case "WITHDRAWING":
          retStatus = "Withdrawing";
        case "WITHDRAWN":
          retStatus = "Withdrawn";
          break;
      }
      return retStatus;
    }

    function getCaseDeadline(value) {
      // OPEN, CLOSED, ARCHIVED, FILED, APPROVED, RFE_RECEIVED, RFE_RESPONSE_SENT, REJECTED, DELETED
      let retStatus = "0";
      switch (value) {
        case "All Cases":
          retStatus = "0";
          break;
        case "30 Days":
          retStatus = "30";
          break;
        case "60 Days":
          retStatus = "60";
          break;
        case "90 Days":
          retStatus = "90";
          break;
        case "120 Days":
          retStatus = "120";
          break;
      }
      return retStatus;
    }

    function setCaseDeadline(value) {
      let retStatus = "All Cases";
      switch (value) {
        case "0":
          retStatus = "All Cases";
          break;
        case "30":
          retStatus = "30 Days";
          break;
        case "60":
          retStatus = "60 Days";
          break;
        case "90":
          retStatus = "90 Days";
          break;
        case "120":
          retStatus = "120 Days";
          break;
      }
      return retStatus;
    }

    $scope.addCaseNote = function (caseId) {
      let dataItemObject = {};

      if (caseId) dataItemObject.caseId = caseId;
      else dataItemObject.caseId = null;

      let modalInstanceNotes = $uibModal.open({
        templateUrl: "views/notes_add_modal.html",
        size: "lg",
        backdrop: "static",
        keyboard: true,
        resolve: {
          dataItemObject: function () {
            return dataItemObject;
          },
        },
        controller: notesSaveCtrl,
      });
    };

    $scope.datePicker = {
      date: {
        startDate: moment($scope.startDateString),
        endDate: moment($scope.endDateString),
      },
      picker: null,
      options: {
        autoApply: true,
        pickerClasses: "custom-display",
        // buttonClasses: 'btn',
        // applyButtonClasses: 'btn-primary',
        // cancelButtonClasses: 'btn-danger',
        locale: {
          format: "MM-DD-YYYY",
          applyLabel: "Apply",
          cancelLabel: "Cancel",
          customRangeLabel: "Custom range",
          separator: " - ",
        },
        ranges: {
          // 'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          // 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          "Last Week": [
            moment().subtract(1, "weeks").startOf("isoWeek"),
            moment().subtract(1, "weeks").endOf("isoWeek"),
          ],
          "This Week": [moment().startOf("isoWeek"), moment().endOf("isoWeek")],
          "Last Month": [
            moment().subtract(1, "months").startOf("month"),
            moment().subtract(1, "months").endOf("month"),
          ],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Year": [
            moment().subtract(1, "years").startOf("year"),
            moment().subtract(1, "years").endOf("year"),
          ],
          "This Year": [moment().startOf("year"), moment().endOf("year")],
          "All Time": [moment("2000-01-01"), moment().add(1, "days")],
        },
        eventHandlers: {
          "apply.daterangepicker": function (event, picker) {
            // console.log("Date Range Start " + $scope.datePicker.date.startDate);
            // console.log("Date Range End " + moment($scope.datePicker.date.endDate).format('YYYY-MM-DD'));
            // console.log("Date Range " + $filter('date')($scope.datePicker.date.endDate, "MM-dd-yyyy"));
            $timeout(function () {
              $scope.searchCases();
            }, 20);
          },
        },
      },
    };
  }

  /**
   * getCasesPagingData -function to get datasource for Cases Paging
   *
   */
  function getCasesPagingData(url, $filter, $translate, $scope) {
    var paging = true;

    var casesData = new kendo.data.DataSource({
      transport: {
        read: {
          url: url,
          dataType: "json",
        },
        parameterMap: function (data) {
          // Mapping between Spring data pagination and kendo UI pagination parameters
          // console.log("parameterMap",data);
          // Pagination
          let tempStatus = $scope.caseStatus;
          let tempDeadline = $scope.caseDeadline;
          // console.log("tempStatus " + tempStatus);
          var serverUrlParams = {
            // pagination
            pageSize: data.pageSize,
            status: tempStatus,
            days: tempDeadline,
            page: (data.page = data.page - 1), // as Spring page starts from 0
            searchTerm: $scope.searchTermString,

            startDate: $scope.startDateString,
            endDate: $scope.endDateString,
          };

          if (data.pageSize > 50) {
            kendo.ui.progress($("#gridCases"), true);
          }

          if ($scope.bPage) serverUrlParams.page = 0;

          $scope.bPage = false;

          // Sorting
          if (data.sort && data.sort.length > 0) {
            serverUrlParams.sort =
              data.sort[0].field + "," + data.sort[0].dir.toUpperCase();
            $scope.$storage.casesList_sort = serverUrlParams.sort;
          } else {
            if ($scope.$storage && $scope.$storage.casesList_sort)
              serverUrlParams.sort = $scope.$storage.casesList_sort;
            else serverUrlParams.sort = "created_at,DESC";
          }

          serverUrlParams.staffUsers = function () {
            if ($scope.usersData.length == 0) {
              return null;
            } else {
              return $scope.usersData.toString();
            }
          };

          return serverUrlParams;
        },
      },
      serverPaging: paging,
      pageSize: 50,
      serverSorting: paging,
      serverFiltering: paging,
      // sort: [{field: "invoiceStatus", dir: "asc"}, {field: "dueBy", dir: "asc"}],
      // sort: [ {field: "dueBy", dir: "asc"}],
      schema: {
        // specify the the schema is json
        type: "json",
        // the JSON element which represents a single data record
        data: "content",
        total: "totalElements",
        // define the model - the object which will represent a single data record
        model: {
          // configure the fields of the object
          id: "id",
          fields: {
            name: { type: "string" },
            strLinkedUser: { type: "string" },
            divLinkedUser: { type: "string" },
          },
        },
        parse: function (data) {
          var x = 0;

          angular.forEach(data.content, function (value) {
            if (value.client) {
              data.content[x].name = value.client.firstName + " ";

              if (value.middleName)
                data.content[x].name += value.client.middleName + " ";

              data.content[x].name += value.client.lastName;
            }

            if (value.linkedUser) {
              data.content[x].strLinkedUser = "";
              data.content[x].divLinkedUser = "";

              for (let y = 0; y < value.linkedUser.length; y++) {
                if (value.linkedUser[y].fullName)
                  data.content[x].strLinkedUser += value.linkedUser[y].fullName;

                data.content[x].divLinkedUser +=
                  "<div>" + value.linkedUser[y].fullName + "</div>";

                if (y + 1 < value.linkedUser.length) {
                  data.content[x].strLinkedUser += ", ";
                }
              }
            }

            x++;
          });

          return data;
        },
        errors: "error", // twitter's response is { "error": "Invalid query" }
      },
      noRecords: {
        template: function (dataItem) {
          let retStr = "";

          retStr += "<h1 class='m-t-lg p-sm font-weight-300 text-center'><br/>";
          retStr += "<span class='fa-stack fa-2x'>";
          retStr +=
            "  <i class='fad fa-square fa-stack-2x text-secondary'></i>";
          retStr += "  <i class='fad fa-briefcase fa-stack-1x fa-primary'></i>";
          retStr += "</span>";
          retStr +=
            "<span ng-show='!bHideCases'><br/><br/>No Cases</h1><div class='text-center margin-top-minus20 padding-bottom-20'>No way there are not cases, check filters again</div></span>";

          return retStr;
        },
      },
      error: function (e) {
        // console.log(e.xhr.status); // displays "Invalid query"
        if (e.xhr.status == 401) {
          window.location.href = "/login?timeout";
        }
      },
    });

    return casesData;
  }

  function getCasesGrid(data, $translate, $scope, $timeout, $rootScope) {
    var exportFlag = false;

    var grid = {
      toolbar: [
        {
          template: function (dataItem) {
            let retStr = "";

            retStr +=
              '<input placeholder="client, case number or case type" ng-keyup="$event.keyCode == 13 && searchCases()" id="search" name="searchTerm" ng-model="searchTerm" type="text" style="width: 250px;" class="form-control display-inline"/>';
            retStr += "";
            retStr +=
              '<input id="users" ng-show="bHideMyCases == false" class="form-control" style="width: 300px; padding-bottom: 6px; padding-left: 10px;min-height: 41px;" name="users" k-ng-model="usersData" k-options="usersOptions" kendo-multi-select="kendoMultiSelectUsers"/>';
            // ng-show="type === 'firm'"
            retStr +=
              '<div class="btn-group  p-w-xs" uib-dropdown="" tooltip-append-to-body="true" tooltip-placement="top" uib-tooltip="Search for Case Statuses">' +
              '                                                    <button type="button" class="btn btn-white btn-sm min-width-filters" uib-dropdown-toggle="">' +
              '                                                        <span>{{searchCase}}</span> <span class="caret"></span>' +
              "                                                    </button>" +
              '                                                    <ul role="menu" uib-dropdown-menu="" style="height: 700px; overflow-y: scroll;" class="disable-scrollbars">' +
              '                                                        <li><a href="" ng-click="openSearchCase(\'All Cases\')"><span>All Cases</span></a></li>' +
              '                                                        <li><a href="" ng-click="openSearchCase(\'Active Cases\')"><span>Active Cases</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'ADMIN_CLOSED\')" ng-click="openSearchCase(\'Admin Closed\')"><span>Admin Closed</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'APPROVED\')" ng-click="openSearchCase(\'Approved\')"><span>Approved</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'ARCHIVED\')" ng-click="openSearchCase(\'Archived\')"><span>Archived</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'CLOSED\')" ng-click="openSearchCase(\'Closed\')"><span>Closed</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'DEFERRED_ACTION_GRANTED\')" ng-click="openSearchCase(\'Deferred Action Granted\')"><span>Deferred Action Granted</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'DENIED\')" ng-click="openSearchCase(\'Denied\')"><span>Denied</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'DISMISSED\')" ng-click="openSearchCase(\'Dismissed\')"><span>Dismissed</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'DOCUMENT_QUALIFIED_NVC\')" ng-click="openSearchCase(\'Document Qualified NVC\')"><span>Document Qualified NVC</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'FILED\')" ng-click="openSearchCase(\'Filed\')"><span>Filed</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'FURTHER_ACTION_NEEDED\')" ng-click="openSearchCase(\'Further Action Needed\')"><span>Further Action Needed</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'OPEN\')" ng-click="openSearchCase(\'Open\')"><span>Open</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'PENDING\')" ng-click="openSearchCase(\'Pending\')"><span>Pending</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'PENDING_AWAITING_DECISION\')" ng-click="openSearchCase(\'Pending Decision\')"><span>Pending Awaiting Decision</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'PENDING_AWAITING_INTERVIEW\')" ng-click="openSearchCase(\'Pending Interview\')"><span>Pending Interview</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'PENDING_INDIVIDUAL_HEARING\')" ng-click="openSearchCase(\'Pending Individual Hearing\')"><span>Pending Individual Hearing</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'PENDING_MASTER_HEARING\')" ng-click="openSearchCase(\'Pending Master Hearing\')"><span>Pending Master Hearing</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'PENDING_RECEIPT_RECEIVED\')" ng-click="openSearchCase(\'Pending Receipt Received\')"><span>Pending Receipt Received</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'RECEIPT_RECEIVED\')" ng-click="openSearchCase(\'Receipt Received\')"><span>Receipt Received</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'REFERRED\')" ng-click="openSearchCase(\'Referred\')"><span>Referred</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'REJECTED\')" ng-click="openSearchCase(\'Rejected\')"><span>Rejected</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'RFE_RECEIVED\')" ng-click="openSearchCase(\'RFE Received\')"><span>RFE Received</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'RFE_RESPONSE_SENT\')" ng-click="openSearchCase(\'RFE Response Sent\')"><span>RFE Response Sent</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'STOP_WORK\')" ng-click="openSearchCase(\'Stop Work\')"><span>Stop Work</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'TEMPORARY_PROTECTED_STATUS\')" ng-click="openSearchCase(\'Temporary Protective Status\')"><span>Temporary Protective Status</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'WITHDRAWING\')" ng-click="openSearchCase(\'Withdrawing\')"><span>Withdrawing</span></a></li>' +
              '                                                        <li><a href="" ng-show="showCaseListItem(\'WITHDRAWN\')" ng-click="openSearchCase(\'Withdrawn\')"><span>Withdrawn</span></a></li>' +
              "                                                    </ul>" +
              "                                                </div>";

            retStr +=
              '<div class="btn-group  p-w-xs" uib-dropdown="" tooltip-append-to-body="true" tooltip-placement="top" uib-tooltip="Search for Deadlines">' +
              '                                                    <button type="button" class="btn btn-white btn-sm min-width-filters" uib-dropdown-toggle="">' +
              '                                                        <span>{{searchDeadline}}</span> <span class="caret"></span>' +
              "                                                    </button>" +
              '                                                    <ul role="menu" uib-dropdown-menu="">' +
              '                                                        <li><a href="" ng-click="openDeadlineCase(\'All Cases\')"><span>All Cases</span></a></li>' +
              '                                                        <li><a href="" ng-click="openDeadlineCase(\'30 Days\')"><span>30 Days</span></a></li>' +
              '                                                        <li><a href="" ng-click="openDeadlineCase(\'60 Days\')"><span>60 Days</span></a></li>' +
              '                                                        <li><a href="" ng-click="openDeadlineCase(\'90 Days\')"><span>90 Days</span></a></li>' +
              '                                                        <li><a href="" ng-click="openDeadlineCase(\'120 Days\')"><span>120 Days</span></a></li>' +
              "                                                    </ul>" +
              "                                                </div>";

            retStr +=
              '<input date-range-picker class="form-control date-picker display-inline dateRangePicker-width-200" style="height: 36px; padding-bottom: 1px;" type="text"\n' +
              '                           ng-model="datePicker.date"' +
              '                           picker="datePicker.picker"' +
              '                           picker-classes="extra-class-names"' +
              "                           min=\"'1970-01-01'\"" +
              '                           max="datePicker.maxDate"' +
              '                           options="datePicker.options"' +
              "                    />";

            // retStr += '<button class="btn btn-success margin-top-1 m-l-sm" ng-click="searchCases()">Go</button>';

            // retStr += '<div class="display-inline p-w-xs"><div ng-show="donotShow" id="daterangepicker" title="daterangepicker"></div>{{ datePicker.date.startDate | date:"MM/dd/yyyy"}} - {{ datePicker.date.endDate | date:"MM/dd/yyyy"}}</div>';

            // retStr +='<div ng-show="bHideCases" open-invoices-add="" class="pull-left p-w-xs"></div>';

            retStr += '<div ng-show="type === \'firm\'" class="pull-right" >';

            if (hasExportPermission($rootScope) == true)
              retStr +=
                '<a class="btn btn-default btn-sm k-grid-excel" tooltip-append-to-body="true" tooltip-placement="top" uib-tooltip="Export All Records">Export</a>&nbsp;&nbsp;';
            // retStr +='<a class="btn btn-default btn-sm " ng-click="spinPDF = true; exportPDF()" tooltip-append-to-body="true" tooltip-placement="top" uib-tooltip="Bulk Case Print" ><i class="fa fa-spinner" ng-show="spinPDF" ng-class="{\'fa-spin\': spinPDF }"></i> Bulk Case</a>';
            retStr += "</div>";

            // <a ng-click="openInvoiceEmailAction(invoicesData.id)" ng-if="invoicesData.invoiceStatus=='OPEN'" class="btn btn-primary" tooltip-append-to-body="true" tooltip-placement="top" uib-tooltip="Email Invoice"><i class="fad fa-mail-bulk fa-lg"  ></i>&nbsp;</a>

            return retStr;
          },
        },
      ],
      noRecords: {
        template: function (dataItem) {
          let retStr = "";

          retStr += "<h1 class='m-t-lg p-sm font-weight-300 text-center'><br/>";
          retStr += "<span class='fa-stack fa-2x'>";
          retStr +=
            "  <i class='fad fa-square fa-stack-2x text-secondary'></i>";
          retStr += "  <i class='fad fa-briefcase fa-stack-1x fa-primary'></i>";
          retStr += "</span>";
          retStr +=
            "<span ng-show='!bHideCases'><br/><br/>No Cases</h1><div class='text-center margin-top-minus20 padding-bottom-20'>Yikes! No cases please check your filters </div></span>";

          return retStr;
        },
      },
      excel: {
        fileName: "Cases.xlsx",
        filterable: true,
        allPages: true,
        title: "CampLegal Cases",
        content: "CampLegal Cases",
        attributes: {
          title: "Export All Cases to Excel",
          content: "content 13",
        },
      },
      excelExport: function (e) {
        e.workbook.fileName =
          "Cases " + kendo.toString(new Date(), "MM/dd/yyyy HH:mm") + ".xlsx";
        e.workbook.filterable = true;
        e.workbook.allPages = true;
        if (!exportFlag) {
          // console.log("Starting Export");
          kendo.ui.progress($(e.sender.element), true);
          e.preventDefault();
          exportFlag = true;
          e.sender.hideColumn(0);

          e.sender.showColumn(3);

          // Petition Type
          e.sender.showColumn(4);

          // Linked Staff
          e.sender.hideColumn(7);
          e.sender.showColumn(8);
          e.sender.showColumn(9);
          e.sender.hideColumn(11);

          $timeout(function () {
            e.sender.saveAsExcel();
            kendo.ui.progress($(e.sender.element), false);
          }, 0);
        } else {
          exportFlag = false;
          e.sender.showColumn(0);
          e.sender.hideColumn(3);
          e.sender.hideColumn(4);
          // e.sender.hideColumn(8);

          // Linked Staff
          e.sender.showColumn(7);
          e.sender.hideColumn(8);
          e.sender.hideColumn(9);
          e.sender.showColumn(11);

          // console.log("Ending Export");
        }
      },
      height: window.innerHeight - 235,
      dataSource: $scope.casesData,
      sortable: true,
      selectable: false,
      pageable: true,
      // filterable: {
      //     extra: false,
      //     operators: {
      //         string: {
      //             contains: ""
      //         }
      //     }
      // },
      columns: [
        {
          field: "name",
          title: " ",
          width: 58,
          sortable: false,
          filterable: false,
          template: function (dataItem) {
            // var imageValue = "<span class='fa-stack fa-2x'><i class='fad fa-square fa-stack-2x '></i><i class='fad fa-briefcase fa-stack-1x fa-primary'></i></span>";

            // Pass row data to directive then to controller
            // return ("<div class='customer-photo col-sm-3 padding-0'>" + imageValue + "</div>");
            // var imageValue = "<span class='fa-stack fa-2x'><i class='fad fa-square fa-stack-2x'></i><i class='fad fa-user fa-stack-1x fa-primary'></i></span>";
            var imageValue = "";

            if (dataItem.client) {
              imageValue =
                '<logged-in-user-icon size="\'user-icon\'" height="\'48\'" path="dataItem.client.filename" first="dataItem.client.firstName" last="dataItem.client.lastName"></logged-in-user-icon>';

              if (dataItem.client.filename) {
                imageValue =
                  "<img class='img-circle' height='48' ng-src='https://res.cloudinary.com/camplegal/image/upload/v1539828991/{{dataItem.client.filename}}.png'/>";
              }
            } else {
              imageValue =
                "<span style='font-size: 0.48rem; margin-left: -5px;'><span class='fa-stack fa-5x'><i class='fas fa-square fa-stack-2x text-primary'></i><i class='fad fa-building fa-stack-1x fa-inverse'></i></span></span>";
            }

            // Pass row data to directive then to controller
            return (
              "<div class='customer-photo col-sm-3 padding-0'>" +
              imageValue +
              "</div>"
            );
          },
          headerAttributes: { style: "text-align: left; padding-left: 10px;" },
        },
        {
          field: "caseNumber",
          title: $translate.instant("CASE_NUMBER"),
          groupable: false,
          filterable: false,
          template: function (dataItem) {
            // Pass row data to directive then to controller
            // retString += "<invoice-details-side-bar id='{{dataItem.id}}' name='" + dataItem.formattedInvoiceNumber + "'/></invoice-details-side-bar >";
            let retString =
              "<case-details-side-bar id='{{dataItem.id}}' name='" +
              dataItem.caseNumber +
              "'/></case-details-side-bar >";
            retString +=
              "<div><small>{{dataItem.petitionType.name}}</small></div>";

            return retString;
          },
          headerAttributes: { style: "text-align: left; padding-left: 10px;" },
        },
        {
          field: "clientOrCompanyId.fullName",
          title: $translate.instant("CLIENT_NAME"),
          groupable: false,
          template: function (dataItem) {
            // Pass row data to directive then to
            // contactsCompanyDetails
            var retData = "";
            if (dataItem.client) {
              retData =
                "<contacts-person-details-side-bar id='{{dataItem.client.id}}' name='{{dataItem.client.firstName}} {{dataItem.client.lastName}}' /></contacts-person-details-side-bar>" +
                "<div><small></small></div>";
              // retData = "<contacts-person-details id='{{dataItem.client.id}}' name='{{dataItem.client.firstName}} {{dataItem.client.lastName}}' /></contacts-person-details>" +
              //     "<div><small></small></div>";
            } else if (dataItem.company) {
              // retData = "<contacts-company-details id='{{dataItem.company.id}}' name='{{dataItem.company.name}}' /></contacts-company-details>" +
              //     "<div><small></small></div>";
              retData =
                "<contacts-company-details-side-bar id='{{dataItem.company.id}}' name='{{dataItem.company.name}}' /></contacts-company-details-side-bar>" +
                "<div><small></small></div>";
            }

            if (dataItem.beneficiaries && dataItem.beneficiaries.length > 0) {
              if (
                dataItem.beneficiaries.length == 1 &&
                dataItem.beneficiaries[0].beneficiaryType == "PRIMARY"
              ) {
                retData +=
                  "<contacts-person-details-side-bar id='{{dataItem.beneficiaries[0].beneficiary.id}}' name='{{dataItem.beneficiaries[0].beneficiary.fullName}}' /></contacts-person-details-side-bar>";
              } else {
                for (let ben = 0; ben < dataItem.beneficiaries.length; ben++) {
                  if (
                    dataItem.beneficiaries[ben].beneficiaryType == "PRIMARY"
                  ) {
                    retData +=
                      "<contacts-person-details-side-bar id='{{dataItem.beneficiaries[ben].beneficiary.id}}' name='{{dataItem.beneficiaries[ben].beneficiary.fullName}}' /></contacts-person-details-side-bar>";
                    break;
                  }
                }
              }
            }

            return retData;
          },
          headerAttributes: { style: "text-align: left; padding-left: 10px;" },
        },
        {
          field: "company.name",
          title: "Company",
          hidden: true,
          groupable: false,
          template: function (dataItem) {
            // Pass row data to directive then to
            // contactsCompanyDetails
            var retData = "";

            if (dataItem.company) {
              retData = dataItem.company.name;
            }

            return retData;
          },
        },
        // { field: "fileId", title: $translate.instant('CASE_ID'), width: 150},
        // { field: "caseId", title: $translate.instant('CASE_ID'), width: 150, filterable: { ui: caseIdFilter} },
        {
          field: "petitionType.name",
          title: "Petition Type",
          hidden: true,
          template: function (dataItem) {
            // Pass row data to directive then to controller
            return "{{dataItem.petitionType.name}}";
          },
        },
        {
          field: "currentMilestone.name",
          title: "Current Milestone",
          filterable: false,
          groupable: false,
          minScreenWidth: 1500,
          template: function (dataItem) {
            let retData = "No Milestone";
            let startedAt = "Has Not Started";
            let reachedAt = "";
            let eta = "";

            if (
              dataItem.currentMilestone !== null &&
              dataItem.currentMilestone.name
            ) {
              retData =
                "<b>" +
                dataItem.currentMilestone.name +
                "</b> - " +
                kendo.toString(
                  dataItem.currentMilestone.taskCompletionPercentage,
                  "n0"
                ) +
                "%";

              if (dataItem.currentMilestone.startedAt) {
                // startedAt = "<b>" + moment.utc(dataItem.currentMilestone.startedAt).local().format('MM-DD-YYYY') + "</b>";
                startedAt =
                  "" +
                  moment
                    .utc(dataItem.currentMilestone.startedAt)
                    .format("MM-DD-YYYY") +
                  "";
              }

              if (dataItem.currentMilestone.reachedAt != null) {
                // reachedAt = " - <b>" + moment.utc(dataItem.currentMilestone.reachedAt).local().format('MM-DD-YYYY') + "</b>";
                reachedAt =
                  " - " +
                  moment
                    .utc(dataItem.currentMilestone.reachedAt)
                    .format("MM-DD-YYYY") +
                  "";
              }

              if (
                dataItem.currentMilestone.reachedAt == null &&
                dataItem.currentMilestone.estimatedCompletionDate != null
              ) {
                // eta = " - <b>" + moment.utc(dataItem.currentMilestone.estimatedCompletionDate).local().format('MM-DD-YYYY') + " (ETA)</b>";
                eta =
                  " - " +
                  moment
                    .utc(dataItem.currentMilestone.estimatedCompletionDate)
                    .format("MM-DD-YYYY") +
                  " (ETA)";
              }

              retData +=
                "<div><small>" + startedAt + reachedAt + eta + "</small></div>";

              // retData += "<div><small> Tasks: <b>" + dataItem.currentMilestone.totalNumberOfCompletedTasks  + "</b> of <b>" + dataItem.currentMilestone.totalNumberOfTasks + "</b></small></div>";
            }

            return "<div class='text-left'>" + retData + "</status></div> ";
            // Pass row data to directive then to controller
            // return ("<div class='text-left'><status status='{{dataItem.caseStatus}}'/></status></div> ");
          },
        },
        // { field: "fileId", title: $translate.instant('FILE_NUMBER'), width: 150, },
        {
          field: "caseStatus",
          title: $translate.instant("CASE_STATUS"),
          width: 165,
          filterable: false,
          groupable: false,
          template: function (dataItem) {
            // Pass row data to directive then to controller
            return "<div class='text-left'><status status='{{dataItem.caseStatus}}'/></status></div> ";
          },
        },
        {
          field: "caseUpdateText",
          title: "",
          groupable: false,
          sortable: false,
          filterable: false,
          width: 25,
          minScreenWidth: 1200,
          template: function (dataItem) {
            var retData = "";

            if (dataItem.caseUpdateText && dataItem.caseUpdateText.length > 0) {
              retData =
                "<div className='text-right font-bold'><span><i class='fad fa-circle font-size-20 fa-lg' style='color: " +
                dataItem.caseUpdateColor +
                ";'></i></span></div>";
            }

            return retData;
          },
          headerAttributes: { style: "text-align: left" },
          headerTemplate: "<span ></span>",
        },
        {
          field: "caseUpdateText",
          title: "Case Update",
          groupable: false,
          sortable: false,
          filterable: false,
          minScreenWidth: 1200,
          // template: function (dataItem) {
          //
          //     return ("<div class='text-center'>" + getDateTimeLocalFromNow(dataItem.lastAccessedAt) + "</div>");
          //     // return ("<div class='text-center'>" + moment.utc(dataItem.lastAccessedAt).local().format('MM/DD/YYYY') + "</div>");
          // },
          template: function (dataItem) {
            var retData = "";
            var bValue = false;

            // retData = "<div class='text-right vertical-middle font-bold'>" + getDateTimeLocalFromNow(dataItem.lastModifiedAt) + "</div>";
            if (dataItem.caseUpdateText && dataItem.caseUpdateText.length > 0) {
              retData =
                "<div class='text-left vertical-middle font-bold'>" +
                dataItem.caseUpdateText +
                "</div>";
              retData +=
                "<div class='text-left'><small class='text-left vertical-middle margin-top-minus2'>" +
                dataItem.caseUpdateBy.firstName +
                " " +
                dataItem.caseUpdateBy.lastName +
                " - " +
                getDateTimeLocalFromNow(dataItem.caseUpdateDate) +
                "</small></div>";
            }

            return retData;
          },
          headerAttributes: { style: "text-align: left" },
          headerTemplate:
            '<span tooltip-append-to-body="true" tooltip-placement="top" uib-tooltip="Last Case Update">Case Update</span>',
        },
        {
          field: "strLinkedUser",
          title: "Staff Owners",
          hidden: true,
          sortable: false,
          filterable: false,
          template: function (dataItem) {
            return dataItem.strLinkedUser;
          },
        },
        {
          field: "originator.formattedName",
          title: "Originator",
          hidden: true,
          sortable: false,
          filterable: false,
          template: function (dataItem) {
            let retStr = "No Originator";

            if (dataItem.originator != null)
              retStr = dataItem.originator.formattedName;

            return retStr;
          },
        },
        {
          field: "divLinkedUser",
          title: "Staff Owners",
          width: 130,
          hidden: false,
          sortable: false,
          filterable: false,
          minScreenWidth: 1500,
          template: function (dataItem) {
            let imageValue = "";

            if (dataItem.linkedUser) {
              for (let y = 0; y < dataItem.linkedUser.length; y++) {
                imageValue +=
                  '<span class="min-width-35 min-height-35"><logged-in-user-icon size="\'user-icon-staff-case-list\'" height="\'30\'" path="\'' +
                  dataItem.linkedUser[y].filename +
                  "'\" first=\"'" +
                  dataItem.linkedUser[y].firstName +
                  "'\" last=\"'" +
                  dataItem.linkedUser[y].lastName +
                  "'\"></logged-in-user-icon></span>";
              }
            }

            return imageValue;
          },
        },
        // { field: "createdAt", width: 180, title: $translate.instant('CREATED'), groupable: false, sortable: true, filterable: false,
        //     template: function (dataItem) {
        //
        //         return ("<div class='text-center'>" + moment.utc(dataItem.createdAt).local().format('MM-DD-YYYY') + "</div>");
        //     },
        //     headerAttributes: { style: "text-align: center" }
        // },
        {
          field: "deadlineStatus",
          width: 50,
          title: " ",
          groupable: false,
          sortable: true,
          filterable: false,
          template: function (dataItem) {
            var retData = "";
            let deadlineStatus = "";
            let bAgo = false;

            if (dataItem.deadline == null) {
              // retData = "<div class='text-right font-bold'><i class=\"fad fa-exclamation-circle text-muted font-size-20\" tooltip-placement=\"left\" uib-tooltip=\"No Deadline Set\"></i></div>";
            } else {
              let days = getDateFromNowInDays(dataItem.deadline);
              let strDays = "";

              if (days >= 0) {
                if (days == 0) strDays = "Today";
                else if (days == 1) strDays = "in " + days + " Day";
                else strDays = "in " + days + " Days";
              } else {
                bAgo = true;
                strDays = days * -1 + " Days Ago";
              }

              if (dataItem.deadlineStatus == "UNSATISFIED") {
                if (bAgo == false)
                  deadlineStatus =
                    '<i class="fad fa-check-circle font-size-20 text-danger" tooltip-placement="left" uib-tooltip="Case Deadline is Unsatisfied"></i>';
                else
                  deadlineStatus =
                    '<i class="fad fa-times-circle font-size-20 text-danger" tooltip-placement="left" uib-tooltip="Case Deadline is Unsatisfied"></i>';
              } else {
                deadlineStatus =
                  '<i class="fad fa-check-circle font-size-20 text-success" tooltip-placement="left" uib-tooltip="Case Deadline is Satisfied"></i>';
              }

              retData +=
                "<div class='text-right font-bold'><span>" +
                deadlineStatus +
                "</span>";
            }

            return retData;
          },
          headerAttributes: { style: "text-align: right" },
        },
        {
          field: "deadline",
          width: 110,
          title: "Deadline",
          groupable: false,
          sortable: true,
          filterable: false,
          template: function (dataItem) {
            var retData = "";
            var bValue = false;
            let deadlineStatus = "";
            let bAgo = false;

            // retData = "<div class='text-right vertical-middle font-bold'>" + getDateTimeLocalFromNow(dataItem.lastModifiedAt) + "</div>";
            if (dataItem.deadline == null) {
              // retData = "<div class='text-left vertical-middle font-bold'>Not Set</div>";
            } else {
              let days = getDateFromNowInDays(dataItem.deadline);
              let strDays = "";

              if (days >= 0) {
                if (days == 0) strDays = "Today";
                else if (days == 1) strDays = "in " + days + " Day";
                else strDays = "in " + days + " Days";
              } else {
                bAgo = true;
                strDays = days * -1 + " Days Ago";
              }
              // retData += "<span class=\" padding-right-5\" ng-if=\"icase.deadline != null\"><i class=\"fad fa-check-square text-success cursor-pointer\" ng-if=\"icase.deadlineStatus == 'SATISFIED'\" ng-click=\"setDeadlineStatus('UNSATISFIED')\" tooltip-placement=\"left\" uib-tooltip=\"Case Deadline is Satisfied\"></i><i class=\"fad fa-check-square text-danger cursor-pointer\" ng-if=\"icase.deadlineStatus == 'UNSATISFIED'\" ng-click=\"setDeadlineStatus('SATISFIED')\" tooltip-placement=\"left\" uib-tooltip=\"Case Deadline is Unsatisfied\"></i></span>";

              if (dataItem.deadlineStatus == "UNSATISFIED") {
                if (bAgo == false)
                  deadlineStatus =
                    '<i class="fad fa-close-circle fa-lg text-danger padding-right-5" tooltip-placement="left" uib-tooltip="Case Deadline is Unsatisfied"></i>';
                else
                  deadlineStatus =
                    '<i class="fad fa-close-circle fa-lg text-danger padding-right-5" tooltip-placement="left" uib-tooltip="Case Deadline is Unsatisfied"></i>';
              } else {
                deadlineStatus =
                  '<i class="fad fa-check-circle fa-lg text-success padding-right-5" tooltip-placement="left" uib-tooltip="Case Deadline is Satisfied"></i>';
              }

              retData +=
                "<div class='text-left font-bold'>" + strDays + "</div>";

              if (
                dataItem.deadlineText &&
                dataItem.deadlineText != null &&
                dataItem.deadlineText.length > 0
              )
                retData +=
                  "<div class='text-left '><small class='text-right vertical-middle'>" +
                  dataItem.deadlineText +
                  "</small></div>";

              retData +=
                "<div class='text-left '><small class='text-right vertical-middle'>" +
                getDateCheckUTC(dataItem.deadline) +
                "</small></div>";
            }

            return retData;
          },
          headerAttributes: { style: "text-align: left" },
          headerTemplate:
            '<span tooltip-append-to-body="true" tooltip-placement="top" uib-tooltip="Deadline/Case Opened is the Bottom Date" >Deadline</span>',
        },
        {
          field: "createdAt",
          width: 90,
          title: "Accessed",
          groupable: false,
          sortable: true,
          filterable: false,
          minScreenWidth: 1500,
          // template: function (dataItem) {
          //
          //     return ("<div class='text-center'>" + getDateTimeLocalFromNow(dataItem.lastAccessedAt) + "</div>");
          //     // return ("<div class='text-center'>" + moment.utc(dataItem.lastAccessedAt).local().format('MM/DD/YYYY') + "</div>");
          // },
          template: function (dataItem) {
            var retData = "";
            var bValue = false;

            // retData = "<div class='text-right vertical-middle font-bold'>" + getDateTimeLocalFromNow(dataItem.lastModifiedAt) + "</div>";
            retData =
              "<div class='text-right vertical-middle font-bold'>" +
              getDateCheck(dataItem.createdAt) +
              "</div>";
            retData +=
              "<div class='text-right'><small class='text-right vertical-middle'>" +
              getDateTimeLocalFromNow(dataItem.createdAt) +
              "</small></div>";

            return retData;
          },
          headerAttributes: { style: "text-align: right" },
          headerTemplate:
            '<span tooltip-append-to-body="true" tooltip-placement="top" uib-tooltip="Case Open">Opened</span>',
        },
        {
          title: "",
          width: 30,
          template: function (dataItem) {
            var retValue =
              '<div class="kendo-action-buttons text-center mouse-pointer" uib-dropdown="" dropdown-append-to-body="" uib-dropdown-toggle="">';

            retValue +=
              '<div class="btn-group" ><i class="fad fa-ellipsis-v text-blue fa-lg" ></i>';
            retValue +=
              '<ul role="menu" uib-dropdown-menu="" class="dropdown-menu dropdown-menu-right" >';

            retValue +=
              '<li ng-click="addCaseNote(dataItem.id)"><a><i class="fad fa-edit fa-lg w-25"></i> - Add Case Note</a></li>';
            retValue +=
              '<li ng-click="editCasesRecordGrid(dataItem.id)"><a><i class="fad fa-briefcase fa-lg w-25"></i> - Edit Case</a></li>';
            retValue +=
              '<li ng-click="statusCasesAction(dataItem.id, dataItem.caseStatus)"><a><i class="fad fa-sync-alt fa-lg w-25"></i> - Case Status</a></li>';

            retValue += "</ul></div></div>";

            return retValue;
          },
        },
      ],
    };

    return grid;
  }
})();
