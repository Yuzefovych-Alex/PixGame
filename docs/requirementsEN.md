# Technical Specification
Development GoalsThe developed CRM system is intended for managing clients, deals, and company sales to ensure structured data storage and further analysis to identify the strengths and weaknesses of the business, assess employee efficiency, and track financial flows from different company clients.
The system must support modularity, allowing third-party developers to create components that expand its capabilities.
In the developed CRM system, the entity "Client" (counterparty) should be considered key, as interaction between the customer and the executor is central. Through this interaction, services and goods are supplied, deals are made, and contracts are concluded. The success of the business using the CRM system depends on how satisfied the end consumer is.
Functional RequirementsKey System Entities● CounterpartyA counterparty is a company or an individual acting as a customer or executor.
● LeadA lead is a representative of a counterparty who is a potential customer: a person who has shown interest but has not yet signed a contract with the executor.
● Holding or Group of CompaniesA holding or group of companies is an association or grouping of counterparties.
● UserA user is a specific account with its own login credentials.
● PermissionA permission is a record that designates the ability to perform a particular action in the system.
● RoleA role is a named set of permissions assigned to users belonging to that role.
● ContractA contract is a document that consolidates individual deals between the executor and the customer (counterparties). A contract may include one or more deals (product deliveries, service provisions, etc.).
● DealA deal represents a product supply or service provision within a specific contract between the customer and the executor (between the client and the system owner’s company).
● Deal StatusA deal status is a stage a deal passes through during its lifecycle.
Actions in the SystemUsers in the system can be granted specific permissions to perform the following actions:
Authentication (logging into the personal account)
Viewing companies and deals
Creating, editing, and deleting companies (within a holding or group of companies)
Creating, editing, and deleting clients
Creating, editing, and deleting deals
Creating, editing, and deleting deal statuses
Creating, editing, and deleting employees
Assigning employees to specific companies and deals
Configuring the system (modifying certain settings)
Functional Modules● Authentication and RegistrationThis module covers all procedures related to user registration and login.
● AuthorizationModules responsible for verifying and granting user permissions.
● Counterparty ManagementModules related to managing groups of companies and counterparties.
● User Management (Employees and Clients)Modules for managing user accounts related to both customer counterparties and executors.
● ContractsModules for managing contracts.
● Deals and StatusesModules for managing deals, statuses, and logic validation of status transitions.
● System SettingsGeneral system configuration.
● NotificationsModules responsible for notifying users about system events.
● Entity CustomizationModules enabling the expansion of the default set of entity fields (deals, contracts, users, counterparties).
User TypesThese are the initial roles necessary for system operation. These roles must be non-removable.
● Guest (Anonymous User)Guests cannot log in or access protected sections of the system.
● System Administrator (User with Unlimited Permissions)Can log in using their account.
Has full access to all system functions.
● Company EmployeeCan log in using their account.
Can be assigned permissions to manage various system entities.
● Client EmployeeCan log in using their account.
Has limited permissions to view deals they are directly involved in.
Available System Interfaces● Front PageA public page describing the key features of the system, purchase and installation methods, and information about the developers.
● Login PageLogin form for accessing the protected system interface.
● Registration PageAllows users to create an account with minimal permissions. Administrators can later assign additional permissions and link the account to a company.
● DashboardThe main interface for authenticated users, featuring widgets linking to different system sections.
● User ProfileDisplays information about the authenticated user.
● User ManagementInterface for managing all system accounts, including filtering and editing users.
● Groups of CompaniesAllows managing company groups.
● CounterpartiesInterface for managing counterparties (customers and executors).
● ContractsEnables contract creation, editing, and management.
● DealsInterface for managing deals and deal statuses.
● System SettingsGeneral system configuration settings.
● Deal Status ConfigurationAllows managing deal statuses.
● Custom Entity ConfigurationAllows adding and modifying fields for various entities.
● Role and Permission ConfigurationInterface for managing user roles and permissions.
Documentation RequirementsA detailed guide on creating third-party extensions for the system.
A comprehensive user manual (for both regular users and administrators).
Development StagesTechnical Specification DevelopmentInterface Diagram DevelopmentInterface PrototypingDesign System Development and UI AssemblyFrontend DevelopmentBackend Development