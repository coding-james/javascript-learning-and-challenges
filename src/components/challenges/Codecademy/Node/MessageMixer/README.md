<!-- GETTING STARTED -->
## Getting Started

To use this service, run the command below:
```
node message-mixer.js 
['caesar'|'symbol'|'reverse'] [amount]
```

### 1. Encrypt a message
   #### What does it do:
   A “Caesar Cipher” in which the characters of the input message are shifted alphabetically by a given amount.
   
   #### Command:
   ```
   $ node message-mixer.js caesar 4
    Enter the message you would like to encrypt...
    > hello world
   ```

    #### Returns:
    ```
    Here is your encrypted message:
    > lipps asvph
    ```

### 2. Reverse a message
   #### What does it do:
   A “Reverse Cipher” in which each word of the input message is reversed in place.

   #### Command:
   ```
   $ node message-mixer.js 'reverse'
    Enter the message you would like to encrypt...
    > hello world
   ```

   #### Returns:
    ```
    Here is your encrypted message:
    > olleh dlrow
    ```

### 3. Turn a message into symbols
   #### What does it do:
   A “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols.