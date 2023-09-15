---
title: Obfuscated XML injection with Burp Suite
description: Fetching users and passwords
publishDate: 2023-09-15
---

# Obfuscated XML injection with Burp Suite

Vulnerabilities in the injection scope is a category where an application doesn't correctly validate/sanitize user input before usint it in an document or query.

XML is a language format commonly used for structuring storing data in a tree-like structure of tags and data. Injecting into it enables unvalidated user data to construct queries allowing an intruder to modify and execute commands in a database

**The attack will be demonstrated in a web lab which mimics an online store.**

By viewing the online store page source, we can click on any product path to view its details.

![Image 1](/src/assets/image1xml.png)

In the product's details we see that “Check stock” sends the `productId` and `storeId` to the application in XML format through a POST request.

![Image 1](/src/assets/image2xml.png)

This leaves us with an idea of how to start exploring our attack surface.
Let's open BurpSuite and send this request to Repeater, where we can probe the `storeId` to check if input is evaluated, we can do so by adding some mathematical expression in between the two `storeId` elements.

![Image 1](/src/assets/image3xml.png)

If the input returns stocks from different stores, it means it's properly evaluated by the application.

We might get our request blocked due to being flagged as a potential risk, such as when we attempt to determine the number of columns returned by the original query.

![Image 1](/src/assets/image4xml.png)

![Image 1](/src/assets/image5xml.png)

This means the application is behind a WAF we want to bypass, we can do so by obfuscating our payload using the Hackvertor Burp extension: highlight your input, right-click, Extensions > Hackvertor > Encode > dec_entities/hex_entities.

If we get a normal response, it means we have bypassed the WAF.

Crafting the correct exploit with the obfuscated entities, we can fetch usernames and passwords from the database.

![Image 1](/src/assets/image6xml.png)

![Image 1](/src/assets/image7xml.png)

### And done! just remember to keep it ethical.
