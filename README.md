# TomeAPP :computer:
The tomeapp is a grocery store management web App

Grocery Store Management System (GSMS)

## [Demo video]()

## Table of Contents

* Description
* Features
* Getting Started
* Prerequisites
* Installation
* Usage
* Contributing
* License

### Description
The Grocery Store Management System (GSMS) is a web-based application built with the Flask framework, designed to assist grocery store owners in managing their sales and products. It provides an easy-to-use interface for creating and tracking sales, managing product inventory, and more.

### Features
* Create new sales.
* Manage product inventory.
* View and track sale history.
* Responsive design for different devices.
* User-friendly interface for grocery store management.
* Getting Started

### Prerequisites
To run the GSMS application, you need the following prerequisites:
1. Web server (e.g., Apache, Nginx)
2. PHP (Hypertext Preprocessor)
3. Python (for Flask)
4. MySQL Database
5. Web browser (e.g., Chrome, Firefox)

### Installation
* Clone this repository to your web server directory:
```
git clone https://github.com/IdiJr/tomeAPP.git
```
* Configure your web server to serve the application.
Make sure HTML, PHP, Python (for Flask), and MySQL are properly set up.

* Create a MySQL database and import the necessary schema and data.
```
cat tomeApp_sql_query | mysql -uroot -p
```
* The database connection details should be configured in the Flask application.

* Open your web browser and access the Flask application URL.

### Usage

**Login:** Enter your login credentials to access the GSMS dashboard.

**Dashboard:** Navigate the dashboard to access various features such as creating new sales and managing products.

**sales**: Create and manage customer sales. Track sale history, including date, sale number, customer name, and total cost.

**Products**: Manage your product inventory. View product details, update product information, and add new products.

### Contributing
We welcome contributions from the community to enhance and improve the Grocery Store Management System.
If you'd like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push your changes to your fork.
- Create a pull request to the main repository.
- Please ensure that your code follows best practices, is well-documented, and has been thoroughly tested.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
