# About This Project
**NETWORK-API** is an API that detects and returns the network that a **Nigerian phone number** belongs to. This API can be used by Web and Mobile Developers to create network detector apps that allows users to know what network a particular phone number is using. 

# Usefulness of this API
Imagine you're in a situation were you're trying to send a surprise airtime to someone and you don't know the network that person is using. Calling the person and asking them what network they are using will be awkward since it's a surprise airtime. With this API you can easily know the network of that person's phone number without having to ask them. You can use this API in your React, Vue, Angular, React Native, Flutter or any of your favourite frameworks to create web or mobile apps for this kind of scenario.

# Usage
Simply make a `GET` request to `https://razaq-network-api.herokuapp.com/` and pass the phone number you want to check as a `parameter`.

Example: https://razaq-network-api.herokuapp.com/08130069772

The phone number can be in the regular format or +234 format e.g `08130069772` or `+2348130069772`

**NOTE:** No need to for any frontend validation of the user's input. All validations has been done for you already in the API. Simply just send the number and you'll receive appropriate response. 

# API Response
Below are JSON response you'll receive for each network if your request is successful

Network | JSON Response | Status Code
------- | ------------- | -----------
MTN | `{"network": "mtn"} ` | 200
GLO | `{"network": "glo"} ` | 200
Airtel | `{"network": "airtel"} ` | 200
9Mobile | `{"network": "9mobile"} ` | 200
Starcomms | `{"network": "starcomms"} ` | 200
Visafone | `{"network": "visafone"} ` | 200
Multilinks | `{"network": "multilinks"} ` | 200
Zoom | `{"network": "zoom"} ` | 200
NTEL | `{"network": "ntel"} ` | 200
Smile | `{"network": "smile"} ` | 200

# Run Locally On Your Computer

* Install [NodeJS](https://nodejs.org/en/)

* Clone this repository

```bash
git clone https://github.com/realrazaq1/network-api.git
```

* Change directory

```bash
cd network-api
```

* Run the app

```bash
npm start
```
Visit `localhost:9898/your-phone-number` to preview

## Authors

* Saliu Abdulrazaq - [Twitter](https://twitter.com/realrazaq1) [Github](https://github.com/realrazaq1)
