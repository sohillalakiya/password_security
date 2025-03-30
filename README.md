# Encryption/Decryption Tool

A simple, user-friendly React application that allows users to encrypt and decrypt text using various cryptographic algorithms and a secret key.

## Features

* **Dual Mode Operation** : Switch easily between encryption and decryption
* **Multiple Algorithms** : Choose from several industry-standard encryption algorithms:
  * AES (Advanced Encryption Standard)
  * DES (Data Encryption Standard)
  * Triple DES
  * Rabbit
  * RC4
* **Secret Key Protection** : Use your own secret key for securing your data
* **Copy to Clipboard** : One-click copy functionality for easy sharing
* **Error Handling** : Clear error messages for invalid inputs
* **Responsive Design** : Works on desktop and mobile devices

## Getting Started

### Prerequisites

Make sure you have Node.js (v14 or newer) and npm installed on your system.

### Installation

1. Clone the repository or download the source code:
   ```bash
   git clone https://github.com/sohillalakiya/password_security.git
   cd password_security
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The application will open automatically in your default browser at `http://localhost:1234`

### Building for Production

To build the application for production, run:

```bash
npm run build
```

The optimized production build will be created in the `dist` directory.

## How to Use

### Encrypting Text

1. Select the "Encrypt" mode (selected by default)
2. Choose your preferred encryption algorithm from the dropdown menu
3. Enter a secret key (this will be required for decryption)
4. Type or paste the text you want to encrypt in the input field
5. Click the "Encrypt" button
6. The encrypted text will appear in the result box
7. Click "Copy" to copy the encrypted text to your clipboard

### Decrypting Text

1. Switch to the "Decrypt" mode
2. Choose the same encryption algorithm used for encryption
3. Enter the secret key used for encryption
4. Paste the encrypted text into the input field
5. Click the "Decrypt" button
6. The decrypted text will appear in the result box

## License

This project is licensed under the MIT License.

## Author

Developed by [Sohil Lalakiya](https://github.com/sohillalakiya).
