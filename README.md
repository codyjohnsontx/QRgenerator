# QR Generator

## Description

QR Generator is a simple web application that allows users to generate QR codes quickly by entering a website URL along with the desired height and width of the QR code.

## Usage

1. Enter the website URL in the "Enter website here" input field.
2. Specify the height and width of the QR code in pixels in the respective input fields.
3. Click the "Get QR code" button.
4. The generated QR code will be displayed below the input fields.

## How it Works

The application uses the QR Server API to generate the QR code based on the provided website URL, height, and width. Upon clicking the "Get QR code" button, the application fetches the QR code image from the API and displays it on the webpage.

## External Dependencies

- [QR Server API](https://api.qrserver.com/v1/create-qr-code/): Used to generate the QR code image dynamically based on the user's input.

## File Structure

- `index.html`: Contains the HTML structure of the web application.
- `css/normalize.css`: External CSS file for normalizing styles across different browsers.
- `css/style.css`: Custom CSS file for styling the web application.
- `js/main.js`: JavaScript file containing the logic for fetching the QR code image and updating the DOM accordingly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Created by [Your Name].

Feel free to reach out with any questions or suggestions!
