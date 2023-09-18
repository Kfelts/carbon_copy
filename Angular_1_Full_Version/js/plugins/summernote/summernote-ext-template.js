(function(factory) {
    /* global define */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function($) {
    $.extend($.summernote.options, {
        template: {
            list: []
        }
    });

    // Extends plugins for adding templates.
    //  - plugin is external module for customizing.
    $.extend($.summernote.plugins, {
        /**
         * @param {Object} context - context object has status of editor.
         */
        'template': function(context) {
            // ui has renders to build ui elements.
            //  - you can create a button with `ui.button`
            var ui = $.summernote.ui;
            var options = context.options.template;
            var defaultOptions = {
                label: "Add Client's Data",
                tooltip: "Dynamically Add Client's Data Into Your Message"
            };

            // Assign default values if not supplied
            for (var propertyName in defaultOptions) {
                if (options.hasOwnProperty(propertyName) === false) {
                    options[propertyName] = defaultOptions[propertyName];
                }
            }

            // add hello button
            context.memo('button.template', function() {
                // create button
                var button = ui.buttonGroup([
                    ui.button({
                        className: 'dropdown-toggle',
                        contents: '<span class="template"/> ' + options.label + ' <span class="caret"></span>',
                        tooltip: options.tooltip,
                        data: {
                            toggle: 'dropdown'
                        }
                    }),
                    ui.dropdown({
                        className: 'dropdown-template',
                        items: options.list,
                        click: function(event) {
                            event.preventDefault();

                            var $button = $(event.target);
                            var value = $button.data('value');
                            var path = options.path + '/' + value + '.html';
                            var retValue = "";
                            var node = document.createElement('span');

                            switch (value) {
                                case 'First Name':
                                    node.innerHTML = '{{Person.firstName}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Last Name':
                                    node.innerHTML = '{{Person.lastName}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Fullname':
                                    node.innerHTML = '{{Person.fullName}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Date of Birth':
                                    node.innerHTML = '{{Person.dateOfBirth|date: "MM-dd-yyyy"}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Alien Number':
                                    node.innerHTML = '{{Person.aNumber}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Phone':
                                    node.innerHTML = '{{Person.phone}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'USCIS Number':
                                    node.innerHTML = '{{Person.uscisNumber}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Mailing In Care Of':
                                    node.innerHTML = '{{Person.inCareOfNameMailing}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Mailing Address 1':
                                    node.innerHTML = '{{Person.addressLine1Mailing}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Mailing Address 2 Number':
                                    node.innerHTML = '{{Person.addressLine2Mailing}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Mailing Address 2 Type':
                                    node.innerHTML = '{{Person.addressTypeMailing}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Mailing City':
                                    node.innerHTML = '{{Person.cityMailing}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Mailing State':
                                    node.innerHTML = '{{Person.stateMailing}}{{Person.provinceMailing}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Mailing Zip':
                                    node.innerHTML = '{{Person.zipMailing}}{{Person.postalCodeMailing}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Mailing Country':
                                    node.innerHTML = '{{Person.countryMailing}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Physical In Care Of':
                                    node.innerHTML = '{{Person.inCareOfPhysical}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Physical Address 1':
                                    node.innerHTML = '{{Person.addressLine1Physical}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Physical Address 2 Number':
                                    node.innerHTML = '{{Person.addressLine2Physical}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Physical Address 2 Type':
                                    node.innerHTML = '{{Person.addressTypePhysical}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Physical City':
                                    node.innerHTML = '{{Person.cityPhysical}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Physical State':
                                    node.innerHTML = '{{Person.statePhysical}}{{Person.provincePhysical}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Physical Zip':
                                    node.innerHTML = '{{Person.zipPhysical}}{{Person.postalCodePhysical}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Physical Country':
                                    node.innerHTML = '{{Person.countryPhysical}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Case Number':
                                    node.innerHTML = '{{Case.caseNumber}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Case File ID':
                                    node.innerHTML = '{{Case.fileId}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Case Type':
                                    node.innerHTML = '{{Case.petitionType.name}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Case Status':
                                    node.innerHTML = '{{Case.caseStatus}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Case Start Date':
                                    node.innerHTML = '{{Case.startDate}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Date Today':
                                    node.innerHTML = '{{todayDate}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Collections Invoice Amount':
                                    node.innerHTML = '{{Invoice.amount}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Collections Invoice Balance':
                                    node.innerHTML = '{{Invoice.balance}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Collections Invoice Paid':
                                    node.innerHTML = '{{Invoice.paidAmount}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Collections Invoice Number':
                                    node.innerHTML = '{{Invoice.invoiceNumber}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Collections Past Due Date':
                                    node.innerHTML = '{{Invoice.dueBy}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Collections Installment Amount':
                                    node.innerHTML = '{{Installment.amount}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Collections Invoice Total Past Due':
                                    node.innerHTML = '{{Invoice.totalPastDue}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Collections Invoice Payment Link':
                                    node.innerHTML = '{{Invoice.paymentLink}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Receipt Notice Priority Date':
                                    node.innerHTML = '{{Notice.priorityDate}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Receipt Notice Receipt Date':
                                    node.innerHTML = '{{Notice.receiptDate}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Receipt Notice Receipt Number':
                                    node.innerHTML = '{{Notice.receiptNumber}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Receipt Notice Case Status Checked At':
                                    node.innerHTML = '{{Notice.uscisCaseStatusCheckedAt}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Receipt Notice Case Status Response':
                                    node.innerHTML = '{{Notice.uscisCaseStatusResponse}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Receipt Notice Visa Bulletin Preference':
                                    node.innerHTML = '{{Notice.visaBulletinPreference}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                case 'Receipt Notice Visa Bulletin Type':
                                    node.innerHTML = '{{Notice.visaBulletinType}}';
                                    context.invoke('editor.insertNode', node);
                                    break;
                                default:
                                    // code block
                            }



                            // 'Mailling Address 1',
                            // 'Mailling Address 2',
                            // 'Mailling Address Type',
                            // 'Mailling City',
                            // 'Mailling State',
                            // 'Mailling Zip',
                            // 'Mailling Country',
                            // 'Residence Address 1',
                            // 'Residence Address 2',
                            // 'Residence Address Type',
                            // 'Residence City',
                            // 'Residence State',
                            // 'Residence Zip',
                            // 'Residence Country'

                            // $.get(path)
                            //     .done(function (data) {
                            //         console.log(data);
                            //         var node = document.createElement('span');
                            //         node.innerHTML = data;
                            //         context.invoke('editor.insertNode', node);
                            //     }).fail(function () {
                            //     alert('template not found in ' + path);
                            // });

                        }
                    })
                ]);

                // create jQuery object from button instance.
                return button.render();
            });
        }
    });
}));