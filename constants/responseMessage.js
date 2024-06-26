exports.responseMessages = {

    /* Common messages */
    common: {
        requestIdRequired: "Request id is required",
        somethindWentWrong: "Some thing went wrong. Please try again some time later",
        tenantNameRequired: "Tenant name required",
        invalidTenantNameRequired: "Invalid tenant name",
        failedToCreate: "Failed to create an entry",
        failedToUpdate: "Failed to update an entry",
        failedToFetch: "Failed to fetch the entry",
        failedToDelete: "Failed to update an entry",
        success: "Success",
        invalidEmailId: "No data with given Email Id",
        inavalidOtp: "Wrong OTP",
        noRecordFound: "No data available"
    },
    /* Common messages */

    client: {
        clientNameRequired: "Client Name Required",
        clientNameInvalid: "Invalid Client name",
        clientIdRequired: "Client Id Required",
        clientIdInvalid: "Invalid Client Id",
        clientNameExists: "Client name already exists",
        clientIdExists: "Client id Already Exists",
        clientReferanceIdInvalid: "Client referance Id invalid",
        clientReferanceIdRequired: "Client referance Id required",
        clientReferanceIdExists: "Client referance Id already exists",
        invalidReferencesObject: "Invalid References Array Object",
        addressLineOneRequired: "Address Line One is Required",
        addressRequired: "Address is Required",
        addressIdRequired: "Address Id is Required",
        cityRequired: "City is Required",
        cityInvalid: "City Id is Invalid",
        stateRequired: "State is Required",
        countryRequired: "Country is Required",
        stateInvalid: "State Id is Invalid",
        countryInvalid: "Country Id is Invalid",
        zipCodeRequired: "Zipcode is Required",
        addressTypeInvalid: "Address type is Invalid",
        contactFirstNameRequired: "First Name is Required",
        contactFirstNameInvalid: "First Name is Invalid",
        contactLastNameInvalid: "Last Name is Invalid",
        contactLastNameRequired: "Last Name is Required",
        contactmiddleNameInvalid: "Last Name is Invalid",
        emailRequired: "Email is Required",
        emailInvalid: "Email is Invalid",
        contactNumberRequired: "Contact is Required",
        InvalidExtension: "Invalid Extension Number",
        InvalidMobileNumber: "Invalid Mobile Number",
        balanceNotNumber: "Balance should be a Number",
        startDateRequired: "Start date is Required",
        startDateInvalid: "Start date is Invalid",
        InvalidPaymentTerms: "Payment Mode Id is not valid",
        InvalidInvoiceId: "Invoice cycle Id is not valid",
        InvalidWeekStart: "Week start Day is not valid",
        InvalidTimesheetCycle: "Timesheet cycle Id is not valid",
        timesheetCycleRequired: "Timesheet cycle is Required",
        paymentTermsRequired: "Payment Terms is required",
        invoiceRequired: "Invoice Cycle is required"
    },

    // employee: {
    //     employeeFirstNameRequired: "First Name Required",
    //     employeeLastNameRequired: "Last Name Required",
    //     employeeFirstNameInvalid: "Invalid First name",
    //     employeeReferenceNameInvalid: "Invalid Reference name",
    //     employeeLastNameInvalid: "Invalid Last name",
    //     employeeMiddleNameInvalid: "Invalid Middle name",
    //     employeeIdRequired: "Employee Id Required",
    //     dobRequired: "Date of birth is Required",
    //     dateOfJoinRequired: "Joining date is Required",
    //     dateOfJoinInvalid: "Joining date is Invalid",
    //     genderRequired: "Gender is Required",
    //     dobInvalid: "Date of birth is Invalid",
    //     employeeIdInvalid: "Invalid Employee Id",
    //     employeeNameExists: "Employee name already exists",
    //     employeeIdExists: "Employee id already Exists",
    //     employeeReferanceIdInvalid: "Employee referance Id invalid",
    //     employeeReferanceIdRequired: "Employee referance Id required",
    //     employeeReferanceIdExists: "Employee referance Id already exists",
    //     invalidReferencesObject: "Invalid References Array Object",
    //     addressLineOneRequired: "Address Line One is Required",
    //     addressRequired: "Address is Required",
    //     addressIdRequired: "Address Id is Required",
    //     cityRequired: "City is Required",
    //     cityInvalid: "City Id is Invalid",
    //     stateRequired: "State is Required",
    //     countryRequired: "Country is Required",
    //     stateInvalid: "State Id is Invalid",
    //     countryInvalid: "Country Id is Invalid",
    //     zipCodeRequired: "Zipcode is Required",
    //     emailRequired: "Email is Required",
    //     employmentTypeRequired: "Employment Type is Required",
    //     employmentCategoryRequired: "Employment Category is Required",
    //     joiningDateRequired: "Joining Date is Required",
    //     ssnRequired: "SSN is Required",
    //     visaRequired: "Visa type is Required",
    //     referralTeamRequired: "Referral Team is Required",
    //     emailInvalid: "Email is Invalid",
    //     contactNumberRequired: "Contact is Required",
    //     InvalidMobileNumber: "Invalid Mobile Number",
    //     InvalidEmailAddress: "Invalid Email address",
    //     InvalidAltEmailAddress: "Invalid alternate Email address",
    //     emailAddressReqired: "Email address Required",
    // },

    /* Response messages for login */
    login: {
        loginError: "Please login to access the application",
        invalidAccess: "You are not allowed to perform this action",
        invalidUserId: "Invalid User ID",
        errorOccured: "An error occurred. Please Try again.",
        tokenRequired: "Token missing in the headers",
        tokenInvalid: "Token expired. Please login to access the application.",
        notAllowedToken: "Your token is not allowed to access the application. Please login again.",
        accountNotFound: "Your Email Id Not Registered With Us. Please contact admin.",
        accountInActive: "Your account is either suspended or inactive. Contact admin to re-activate your account.",
        loginOutError: "Please login to perform this action",
        accountLocked: "Your account is locked for 15 minutes due to multiple login attempts.",
        passwordMismatch: "Password is not matching with your email ID",
        passwordLengthError: "Password must be minimum 6 characters length",
        otpRequired: "OTP Required",
        otpError: "Invalid otp",
        otpAlreadyVerified: "OTP already verified",
        fail: "Failed",
        emailIdRequired: "Email ID required",
        passwordRequired: "Password required",
        passwordInvalid: "Password Invalid",
        confirmPasswordRequired: "Confirm Password required",
        oldPasswordRequired: "Password required",
        emailIdInvalid: "Invalid email ID"

    },
    /* Response messages for login */

    /* Response messages for registration */
    registration: {
        firstNameInvalid: "First name invalid",
        firstNameRequired: "First name required",
        middleNameInvalid: "Middle name invalid",
        lastNameInvalid: "Last name invalid",
        lastNameRequired: "Last name required",
        emailIdRequired: "Email ID required",
        emailIdExists: "Email ID already exists",
        emailIdNotExists: "Email ID not exists",
        emailIdInvalid: "Invalid email id",
        emailIdNotAllowed: "Email ID not allowed",
        contactNumberRequired: "Contact Number Required",
        contactNumberInvalid: "Contact Number invalid",
        contactNumberExists: "Contact Number already exists",
        domainNameRequired: "Domain Name Required",
        domainNameInvalid: "Domain Name Not Found",
        tenantNameRequired: "Tenant Name Required",
        tenantNameInvalid: "Invalid Tenant Name",
        checkMailTenantDetails: "Please check your mail for login details",
        subDomainNameRequired: "Sub domain name required",
        subDomainNameInvalid: "Only Characters and numbers are allowed for Sub domain name.",
        subDomainNameSpaceContains: "Space not allowed in sub domain name",
        subDomainNameExists: "Sub Domain Already Exists",
        maxDomainLimitReached: "Maxi limit reached for the domain. Please reach us for more information",
        accountAlreadyVerified: "Your account already verified. Please check your mail for login details.",
        subdomainCreationFailed: "Failed to create Sub Domiain. Please try again.",
        otpRequired: "OTP is mandatory",
        otpInvalid: "Please enter a valid OTP",
        newSuperAdminCreationFailed: "Failed to create a new super admin account",
        failedToSendOtp: "Failed to send OTP"
    },
    /* Response messages for registration */

    /* Response messages for employee onboarding */
    employee: {
        selfOnbaording: {
            domainNameRequired: "Domain Name Required",
            domainNameInvalid: "Domain Name Not Found",
            tenantNameRequired: "Tenant Name Required",
            tenantNameInvalid: "Invalid Tenant Name",
            checkMailTenantDetails: "Please check your mail for login details",
            subDomainNameRequired: "Sub domain name required",
            subDomainNameInvalid: "Only Characters and numbers are allowed for Sub domain name.",
            subDomainNameSpaceContains: "Space not allowed in sub domain name",
            subDomainNameExists: "Sub Domain Already Exists",
            maxDomainLimitReached: "Maxi limit reached for the domain. Please reach us for more information",
        },
        behalfOnboarding: {
            stateIdInvalid:"State ID Invalid",
            firstNameRequired: "First Name Required",
            firstNameInvalid: "First Name Only Characters with white space are allowed",
            middleNameRequired: "Middle Name Required",
            middleNameInvalid: "Middle Name Only Characters with white space are allowed",
            lastNameRequired: "Last Name Required",
            lastNameInvalid: "Middle Name Only Characters with white space are allowed",
            emailIdRequired: "Email ID Required",
            emailIdNotAllowed: "Email ID not allowed to create an account",
            emailIdInvalid: "Email ID Contain Invalid Characters",
            emailIdExists: "Email ID Already Exists",
            alternateEmailIdInvalid: "Alternate Email ID Contain Invalid Characters",
            passwordRequired: "Password Required",
            passwordInvalid: "Password should be combination of one uppercase , one lower case, one digit, one special character and min 8 , max 20 char long",
            confirmPasswordRequired: "Confirmation password required",
            passwordConfirmInvalid: "Password Confirmation does not match password",
            oldPasswordRequired: "Old Password required",
            invalidOldPassword: "Invalid old password",
            contactNumberRequired: "Customer number required",
            contactNumberInvalid: "Customer number must be a number",
            contactNumberExists: "Customer number already exists",
            genderRequired: "Gender required",
            genderInvalid: "Gender must be Male or Female",
            nameRequired: "Name required",
            nameInvalid: "Special characters are not allowed",
            statusRequired: "Active status required",
            descriptionRequired: "description required",
            symbolRequired: " Currency symbol required",
            nameExists: "Name already exists",
            statusInvalid: "Invalid active status",
            descriptionInvalid: "Invalid description",
            invalidRoleId: "Invalid role id",
            requiredRoleId: "Role id is required",
            invalidDepartmentId: "Invalid Department Name",
            invalidImageId: "Invalid profile image id",
            requiredDepartmentId: "Department Name is required",
            invalidDob: "Invalid DOB",
            requiredDob: "DOB Required",
            dateOfJoiningRequired: "Data of joining required",
            dateOfJoiningInvalid: "Invalid Date Of joining",
            reportingEmployeeIdRequired: "Repoting Employee Required",
            invalidReportingEmployeeId: "Invalid Repoting Employee",
            stateRequired: "State name Required",
            stateAlreadyExists: "State name already exists",
            stateIdInactive: "Inactive State Name",
            invalidStateId: "Invalid state name",
            countryInactive: "Inactive Country Name",
            countryRequired: "Country Required",
            countryInvalid: "Invalid Country Name",
            invalidCountryId: "Invalid country",
            cityRequired: "City Required",
            cityInvalid: "City name Special characters are not allowed",
            referredNameRequired: "Referred Name Required",
            referredNameInvalid: "Reffered name Special characters are not allowed",
            addressRequired: "Address array required",
            addressIdRequired: "Address ID Required",
            addressIdInvalid: "Address ID invalid",
            address1Required: "Address Line 1 Required",
            address2Required: "Address Line 2 Required",
            ssnRequired: "SSN Required",
            ssnAlreadyExists: "SSN already exists",
            referralTeamRequired: " Referral team is required",
            referralTeamInvalid: "Invalid Refereal Team. Team Must be Internal, Consultant/Contractors, Social Account, Other Source",
            referralNameRequired: " Referral name is required",
            referralNameInvalid: "Referral Name is invalid",
            referralIdRequired: " Referral ID is required",
            referralIdNotExists: "Invalid Refernece Employee Id",
            zipcodeRequired: " Zip Code Required",
            zipcodeInvalid: "Invalid Zip Code",
            requiredEmployeeId: "Employee id is required",
            invalidEmployeeId: "Invalid Employee id",
            invalidConsultantId: "Invalid Consultant id",
            rankRequired: "Rank required",
            rankInvalid: "Rank must be a number",
            rankOrder: "Invalid rank order",
            rankDuplicate: "Rank cannot be duplicated",
            documentCategoryIdInvalid: "Invalid document category ID",
            documentCategoryIdRequired: "Document category ID required",
            employeeRegisteredIdRequired: "Employee registered ID Required",
            employeeRegisteredIdAlreadyExists: "Employee registered already exists",
            invalidUSCitizen: "Invalid Employee US Citizen Status. It aceepts only boolean",
            requiredUSCitizen: "Employee US Citizen Status Required",
            visaTypeIdRequired: "Visa Type Id Required",
            visaTypeIdInvalid: "Visa Type Id Invalid",
            employmentTypeIdRequired: "Employment Type Required",
            employmentTypeIdInvalid: "Invalid Employment Type ",
            employeeCategoryIdRequired: "Employee Category Required",
            employeeCategoryIdInvalid: "Invalid Employee Category ID",
            teamIdRequired: "Team Required",
            teamIdInvalid: "Invalid Team",
            isEnableLoginRequired: "Enable login is required",
            isEnableLoginIsInvalid: "Invalid enable login. It aceepts only boolean",
            isSuperAdminRequired: "Is a super admin Required",
            isSuperAdminIsInvalid: "Invalid super admin allow . It aceepts only boolean"
        },
        educationDetails: {
            requestId: "Request Id is required",
            educationDetailsRequired: "Education details required",
            employeeIdRequired: "Employee ID required",
            employeeIdExists: "Employee ID already exists",
            employeeIdNotExists: "Employee ID not exists",
            filedOfStudyRequired: "Field of study required",
            invalidFieldOfStudy: "Invalid Field of study",
            degreeTypeIdRequired: "Degree Type Id required",
            universityRequired: "University Name required",
            startDateRequired: "Start Date required",
            endDateRequired: "End Date required",
            invalidStartDate: "Invalid Start date",
            invalidEndDate: "Invalid End date",
            educationIdRequired: "Employee Education ID required",
            invalidEducationId: "Invalid Employee education ID",
            invalidEducationDetailsId: "Invalid Employee education Details ID",
            commentRequired: "Comment Required",
            certificateRequired: "Document required",
            certificateNameRequired: "Document name required",
            invalidDegreeId: "Invalid Degree Type ID",
            invalidUniversityName: "Invalid University Name"
        },
        skills: {
            requestId: "Request Id is required",
            skillsRequired: "Skills required",
            skillNameRequired: "Skills Name required",
            invalidSkillName: "Invalid Skills Name",
            yearsOfExperienceRequired: "Years of experience required",
            invalidYearsOfExperience: "Invalid Years of experience",
            invalidSkillsId: "Invalid Skills ID",
            skillsIdRequired: "Skills ID required",
            invalidSkillId: "Invalid Skill ID"
        },
        bankDetails: {
            requestId: "Request Id is required",
            bankNameRequired: "Bank Name required",
            invalidBankName: "Invalid Bank Name",
            accountTypeRequired: "Account Type required",
            confirmAccountNumberInvalid: "Account Number Confirmation does not match Account Number",
            confirmAccountNumberRequired: "Confirmation Account Number required",
            accontNumberRequired: "Account Number required",
            invalidAccountNumber: "Invalid Account Number",
            routeNumberRequired: "Route Number required",
            invalidRouteNumber: "Invalid Route Number",
            confirmRouteNumberInvalid: "Route Number Confirmation does not match Account Number",
            confirmRouteNumberRequired: "Confirmation Route Number required",
            invalidBankDetailsId: "Invalid Bank Details ID",
            bankDetailsIdRequired: "Bank Details ID required",
            invalidBankId: "Invalid Bank ID",
            bankIdRequired: "Bank ID required"
        },
        documents: {
            requestId: "Request Id is required",
            documentTypeRequired: "Document Type ID required",
            documentTypeInvalid: "Invalid Document Type ID",
            documentNumberRequired: "Document Number required",
            invalidDocumentNumber: "Invalid Document Number",
            validFromRequired: "Valid From required",
            validFromInvalid: "Invalid Valid From",
            validToRequired: "Valid To required",
            validToInvalid: "Invalid Valid To",
            documentsIdRequired: "Document Details ID required",
            invalidDocumentsId: "Invalid Document Details ID",
            documentIdRequired: "Document ID required",
            invalidDocumentId: "Invalid Document ID"
        },
        imigration: {
            requestId: "Request Id is required",
            //Employee Immigration Passport Details
            passportDetailsIdRequired: "Passport Details ID required",
            passportDetailsIdInvalid: "Invalid Passport Details ID",

            //Employee Immigration I94 Details
            I94DetailsIdRequired: "I94 Details ID required",
            I94DetailsIdInvalid: "Invalid I94 Details ID",

            //Employee Immigration Visa Details
            visaTypeRequired: "Visa Type ID required",
            visaTypeInvalid: "Invalid Visa Type ID",
            visaNumberRequired: "Visa Number required",
            invalidVisaNumber: "Invalid Visa Number",
            visaIdRequired: "Visa Details ID required",
            invalidVisaId: "Invalid Visa Details ID",
        }
    },
    /* Response messages for employee onboarding */

    /* Response messages for uploading */
    upload: {
        imageNotFound: "Image Cannot Blank",
        documentNotFound: "Document not found",
        errorUploading: "Error while uploading. Please try again!!!",
        invalidImageUploadFormat: "Invalid upload image format. Accepted format JPG and PNG",
        invalidTargetUrl: "Invalid URL please check again",
        invalidDocumentUploadFormat: "Invalid upload document format. Accepted format PDF and DOC",

    },
    /* Response messages for uploading */

    /* Response messages for application configurations */
    configurations: {

        employeeTeam: {
            employeeTeamNameRequired: "employeeTeam name is Required",
            employeeTeamNameInvalid: "employeeTeam name is Invalid",
            descriptionRequired: "description is required",
            statusRequired: "isActive status is required",
            statusInvalid: "isActive status is invalid",
            employeeTeamNameExists: "employeeTeam name already exists",
            employeeTeamId: "employeeTeam Id Required",
            IdNotExists: "employeeTeam Id doesnot exists"
        },

        employmentType: {
            employmentTypeNameRequired: "employmentType name is Required",
            employmentTypeNameInvalid: "employmentType name is Invalid",
            descriptionRequired: "description is required",
            statusRequired: "isActive status is required",
            statusInvalid: "isActive status is invalid",
            employmentTypeNameExists: "employmentType name already exists",
            employmentTypeId: "employmentType Id Required",
            IdNotExists: "employmentType Id doesnot exists"
        },

        invoiceSettings: {
            statusInvalid: "isActive status is invalid",
            invoiceSettingsIdRequired: "invoiceSettings Id Required",
            invoiceSettingsIdInvalid: "Invalid invoiceSettings Id",
            IdNotExists: "invoiceSettings Id not exists",
            invoiceSettingsIdExists: "invoiceSettings id Already Exists",
        },
        paymentMode: {
            paymentModeNameRequired: "paymentMode Name Required",
            paymentModeNameInvalid: "paymentMode Document name",
            descriptionRequired: "description is required",
            statusInvalid: "isActive status is invalid",
            paymentModeIdRequired: "paymentMode Id Required",
            paymentModeIdInvalid: "Invalid paymentMode Id",
            paymentModeNameExists: "paymentMode Name Already Exists",
            IdNotExists: "paymentMode Id doesnot exists",
            paymentModeIdExists: "paymentMode id Already Exists",
        },


        clientDocumentType: {
            clientDocumentTypeNameRequired: " clientDocumentType name is Required",
            clientDocumentTypeNameInvalid: " clientDocumentType name is Invalid",
            descriptionRequired: "description is required",
            statusRequired: "isActive status is required",
            statusInvalid: "isActive status is invalid",
            clientDocumentType_idRequired: "clientDocumentType_id is required",
            clientDocumentTypeNameExists: " clientDocumentType name already exists",
            IdNotExists: " clientDocumentType Id doesnot exists"
        },

        netPayTerms: {
            daysRequired: "Days Required",
            daysInvalid: "Invalid Days",
            daysAlreadyExists: "Days already exists",
            statusRequired: "status required",
            statusInvalid: "Invalid status",
            IdRequired: "Net pay term id required",
            IdNotExists: "Net pay term id not exists",
            descriptionRequired: "description is required",
        },

        category: {
            categoryNameRequired: "Category name is Required",
            categoryNameInvalid: "Category name is Invalid",
            employmentTypeIdRequired: "employmentType Id is Required",
            descriptionRequired: "description is required",
            statusRequired: "isActive status is required",
            statusInvalid: "isActive status is invalid",
            categoryNameExists: "Category name already exists",
            categoryIdRequired: "Category Id Required",
            IdNotExists: "Category Id doesnot exists"
        },
        visaType: {
            visaTypeNameRequired: "Visa Type name required",
            visaTypeNameInvalid: "Invalid Visa Type name",
            visaTypeNameExists: "Visa Type name already exists",
            visaTypeDescriptionRequired: "Visa Type description is required",
            visaTypeStatusRequired: "Visa Type status required",
            visaTypeStatusInvalid: "Invalid Visa Type status",
            IdRequired: "Visa Type id required",
            IdNotExists: "Visa Type id not exists"
        },
        visaTypeDocuments: {
            visaTypeDocumentsNameRequired: "Visa Type Document name required",
            visaTypeDocumentsNameInvalid: "Invalid Visa Type Document name",
            visaTypeDocumentsNameExists: "Visa Type Document name already exists",
            visaTypeDocumentsDescriptionRequired: "Visa Type Document description is required",
            visaTypeDocumentsStatusRequired: "Visa Type status Document required",
            visaTypeDocumentsStatusInvalid: "Invalid Visa Type Document status",
            visaTypeDocumentIdRequired: "Visa Type Document  id required",
            visaTypeDocumentIdNotExists: "Visa Type Document id not exists",
            IdRequired: "Visa Type Document id  required",
            IdNotExists: "Visa Type Documentid  not exists"
        },
        educationLevel: {
            educationLevelNameRequired: "Education Level name required",
            educationLevelNameInvalid: "Invalid Education Level name",
            educationLevelNameExists: "Education Level name already exists",
            educationLevelDescriptionRequired: "Education Level description is required",
            educationLevelStatusRequired: "Education Level status required",
            educationLevelStatusInvalid: "Invalid Education Level status",
            educationLevelIdRequired: "Education Level id required",
            educationLevelIdNotExists: "Education Level id not exists",
            IdRequired: "Education Level id required",
            IdNotExists: "Education Level id not exists"
        },
        skills: {
            skillNameRequired: "Skills name required",
            skillNameInvalid: "Invalid Skill  name",
            skillNameExists: "Skill  name already exists",
            skillDescriptionRequired: "Skill  description is required",
            skillStatusRequired: "Skill  status required",
            skillStatusInvalid: "Invalid Skill status",
            skillIdRequired: "Skill id required",
            skillIdNotExists: "Skill id not exists",
            IdRequired: "Skill id required",
            IdNotExists: "Skillid not exists"
        },
        jobTitle: {
            jobTitleDocumentsNameRequired: "Job Title Document name required",
            jobTitleDocumentsNameInvalid: "Job Title Type Document name",
            jobTitleDocumentsNameExists: "Job Title Document name already exists",
            jobTitleDocumentsDescriptionRequired: "Job Title Document description is required",
            jobTitleDocumentsStatusRequired: "Job Title status Document required",
            jobTitleDocumentsStatusInvalid: "Job Title Type Document status",
            jobTitleDocumentIdRequired: "Job Title Document  id required",
            jobTitleDocumentIdNotExists: "Job Title Document id not exists",
            IdRequired: "Job Title id required",
            IdNotExists: "Job Title id not exists"
        },
        team: {
            departmentId: "department Id required",
            teamNameRequired: "team name is Required",
            teamNameInvalid: "team name is Invalid",
            descriptionRequired: "description is required",
            statusRequired: "isActive status is required",
            statusInvalid: "isActive status is invalid",
            teamNameExists: "team name already exists",
            IdNotExists: "team Id doesnot exists",
            departmentId: "departmentId required",
            teamId: "teamId required"
        },
        department: {
            departmentNameRequired: "department name is Required",
            departmentNameInvalid: "department name is Invalid",
            descriptionRequired: "description is required",
            statusRequired: "isActive status is required",
            statusInvalid: "isActive status is invalid",
            departmentNameExists: "department name already exists",
            departmentId: "department Id Required",
            IdNotExists: "department Id doesnot exists"
        },
        personalDocument: {
            personalDocumentNameRequired: "personalDocument name is Required",
            personalDocumentNameInvalid: "personalDocument name is Invalid",
            descriptionRequired: "description is required",
            statusRequired: "isActive status is required",
            statusInvalid: "isActive status is invalid",
            personalDocumenttNameExists: "personalDocument name already exists",
            personalDocumentId: "personalDocument Id Required",
            IdNotExists: "personalDocument Id doesnot exists",
            personalDocumentNameExists: "personalDocumentNameExists already exists"
        },
        country: {
            countryNameRequired: "country name is Required",
            countryNameInvalid: "country name is Invalid",
            descriptionRequired: "description is required",
            statusRequired: "isActive status is required",
            statusInvalid: "isActive status is invalid",
            countryNameExists: "country name already exists",
            countryId: "country Id Required",
            IdNotExists: "country Id doesnot exists"
        },
        state: {
            stateNameRequired: "state name is Required",
            stateNameInvalid: "state name is Invalid",
            descriptionRequired: "description is required",
            statusRequired: "isActive status is required",
            countryId: "countryId required",
            statusInvalid: "isActive status is invalid",
            stateNameExists: "state name already exists",
            departmentId: "state Id Required",
            IdNotExists: "state Id doesnot exists",
            stateId: "state Id Required"


        }
    },
    /* Response messages for application configurations */

    /* Response messages for client */
    client: {
        clientNameRequired: "Client Name Required",
        clientNameInvalid: "Invalid Client name",
        clientIdRequired: "Client Id Required",
        clientIdInvalid: "Invalid Client Id",
        clientNameExists: "Client Name Already Exists",
        clientIdExists: "Client id Already Exists",
        clientReferanceNameInvalid: "Client referance name invalid",
        clientReferanceNameRequired: "Client referance name required",
        invalidReferencesObject: "Invalid References Array Object",
    },
    /* Response messages for client */

    /* Response messages for Vendor */
    vendor: {
        vendorNameRequired: "Vendor Name Required",
        vendorNameInvalid: "Invalid Vendor name",
        vendorIdRequired: "Vendor Id Required",
        vendorIdInvalid: "Invalid Vendor Id",
        vendorNameExists: "Vendor Name Already Exists",
        vendorReferenceIdRequired: "Vendor ReferenceId Required",
        vendorReferenceIdInvalid: "Invalid Vendor Reference Id",
        vendorReferenceIdExists: "Vendor Reference id Already Exists",
        invalidReferencesObject: "Invalid References Array Object",
        addressInvalid: "Invalid Address",
        displayNameRequired: "Display Name Required",
        displayNameInvalid: "Invalid Display name",
        invalidShippingAddressObject: "Invalid Shipping Address Array Object",
        websiteAddressRequired: "Website Address Required",
        desknumberRequired: "Desk Number Required",
        desknumberInvalidL: "Invalid Desk Number",
        extensionRequired: "Extension Required",
        extensionInvalid: "Invalid Extension",
        orderInvalid: "Rank must be a number",
        invalidContactObject: "Invalid Contact Details Array Object",
        invalidPaycycleObject: "Invalid Pay Cycle Details Array Object",
        currencyTypeRequired: "Currency Type Required",
        openingBalanceRequired: "Opening Balance Required",
        paymentTermsRequired: "Payment Terms Required",
        weekStartsFromRequired: "Week Starts From Required",
        weekStartsFromInvalid: "Week Starts From is invalid",
        contactIdRequired: "Contact ID Required",
        contactIdInvalid: "Invalid Contact ID",
        documentNotFound: "Document Cannot Blank",
        vendorFirstnameRequired: "Vendor first name required",
        vendorFirstnameInvalid: "Vendor first name invalid",
        vendorMiddlenameRequired: "Vendor middle name required",
        vendorMiddlenameInvalid: "Vendor middle name invalid",
        vendorLastnameRequired: "Last name required",
        vendorLastnameInvalid: "Last name invalid",
        vendorEmailidRequired: "Vendor email id required",
        vendorEmailidInvalid: "Vendor email id invalid",
        vendorDisplayRequired: "Display name required",
        vendorDesknumberRequired: "Vendor desk number required",
        vendorDesknumberInvalid: "Vendor desk number invalid",
        vendorExtensionRequired: "Vendor extension required",
        vendorExtensionInvalid: "Vendor extension invalid",
        vendorMobilenumberRequired: "Vendor mobile number required",
        vendorMobilenumberInvalid: "Vendor mobile number invalid",
        vendorRankRequired: "Vendor rank required",
        vendorRankInvalid: "Vendor rank invalid",
        vendorContactsExists: "Vendor contact already exists",
        currencyTypeIdRequired: "Currency Type ID required",
        currencyTypeIdInvalid: "Currency Type ID invalid",
        netPaymentTermsIdRequired: "Net Pay Terms ID required",
        netPaymentTermsIdInvalid: "Net Pay Terms ID Invalid",
        invoiceTsCycleIdRequired: "Invoice Time Sheet Cycle ID required",
        invoiceTsCycleIdInvalid: "Invoice Time Sheet Cycle ID invalid",
    },
    /* Response messages for Vendor */

    /* Response messages for Placement */
    placement: {
        placementReferenceRequired: "Placement Reference ID required",
        placementReferenceAlreadyExists: "Placement Reference ID already exists",
        jobTitleIdInvalid: "Invalid Job Title ID",
        jobTitleIdRequired: "Job Title ID required",
        projectStartDateRequired: "Project start date required",
        workEmailRequired: "Work Email ID required",
        billingTypeRequired: "Billing Type required",
        billingTypeInvalid: "Billing Typeinvalid. It may be salary or hourly",
        billigRateRequired: "Bill rate required",
        payRateRequired: "Pay Rate required",
        placementIdRequired: "Placement ID required",
        placementIdInvalid: "Placement ID invalid",
        inavlidConfigType: "Invalid config type. Config type must be 1 or 2",
        configTypeRequired: "Config type required"
    },
    /* Response messages for Placement */

};