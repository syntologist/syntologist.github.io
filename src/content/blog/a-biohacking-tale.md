---
title: A biohacking tale
description: Becoming 1% computer
publishDate: 2026-06-16
---

# A biohacking tale

I've realized I haven't updated this blog in over 2 years, let's say I'm not the best at keeping up with the latest bullshit and I haven't felt joy in a while but here we are.

I really like the color red, to the point where I sanely say I'd like to have red colored skin. Similarly to as I like machines, so I decided to implant a biochip into my body and its been pretty fun being **1% computer** :D

So far, I haven't done anything super special with the implant, just using it to unlock some personal stuff and also serving as a """"""business card"""""" inside my hand, I might have more excentric ideas for it in the future and will try to keep this blog updated, nevertheless we always face the nature of the biochip's limit.

BUT I'm writing here to document and dump some info that might be entertaining and / or useful if this topic spikes your interest.

My implant is an **NTAG216** I bought off of some sketchy vendor and inserted it between my index and thumb.
In order to read and write it I've gotten an **Arduino Leonardo** + a violently chinese **RC522** module.
#### ******* I HIGHLY recommend straight out buying a PN532 instead of the RC, it just works better and has password support, I WAS STUPID AND BRICKED MY OWN HAND because of this *******
<br>
So anyway, I soldered and wired the module to the Arduino and oh lord that RC522 is so cheap it came with a little nfc keychain and card that aren't even SUPPORTED by the RC, the fob + card are 125 kHz while the module is.. not fucking it.

![Image 1](@assets/arduino1.jpeg)
For the wiring, check https://www.circuito.io/app?components=9442,11286,761981

The first problem I faced with it was inconsistency, sometimes it would work and sometimes it wouldn't, I troubleshot this to my bones, it was fine in the multimeter, the antennas were set to highest gain but it was working like shit, after some hours going insane I found out **it does not work if you plug it to a charging laptop**. Apparently when a laptop is charging, its USB ports carry high frequency switching noise from the AC adapter, and that noise is highly amplified by the RC522 analog-to-digital hearing converter, so it thinks it's hearing a tag that never stops screaming :)

Well, lesson learned, only using it when my machine is not plugged to the wall, HOWEVER after some time it stopped working once again, same annoying inconsistency to the point where it was barely working at all. This time I seriously thought I was going insane troubleshooting this, everything seemed perfect, after a couple days I found the solution: **it only works WITHOUT THE POWER PORT plugged in**.
I was rewiring it and running a troubleshooting sketch after every wire I disconnected and discovered the problem this time was the damn power, once I unplugged the 3v cable from the Leonardo it began working perfectly, no inconsistency, no mistakes, just smooth work **running completely on GND**.

![Image 2](@assets/arduino2.jpeg)

**I have no fucking idea** how this is working being fed exclusively by the ground port, but it's the only way it doesn't crash so let's leave it as it is. _A machine shall not be questioned._

Okay so now I got the whole setup. Returning to why I'd recommend buying a PN532 instead of the RC255:
If you're buying a module to read / write your biochip, **do not configure it with your phone using an NFC app beforehand**. Once you write something in it with your phone first, the RC is not able to write over that memory and will think they're locked bytes... _a PN wouldn't be this dumb_. So you either configure your implant with the RC only, or buy a better module, never use your phone.

I wrote the memory with the NFCTools app before my module arrived in the mail and this happened to me, the only way to free those bytes was by reseting the biochip, but how do I do it if my module doesn't support this?????? So I searched for another NFC app with the "reset" feature and eventually found one. Huge mistake.
I reset it using an _amazing_ newly downloaded app and thought I was good to go, but everything stopped working ONCE AGAIN and it seemed like my biochip was completely **dead**.... I found out this app had put a **PASSWORD LOCK** on my implant without my knowledge and the only way to unlock those bytes out was though a paywall. They locked my hand from myself. I was unauthorized under my own skin............. and well, I had to pay for the "premium" feature so I could edit the memory by hand since I had bought a useless shit module.

So yeah, buy some better electronics so these stupid things don't get to happen. However, just for the record:

The **capability container (CC)** - page **0xE3** layout is:

**Byte 0** - magic number - always 0x04 for NDEF compatibility <br>
**Byte 1** - access rights for read / write <br>
**Byte 2** - memory size indicator<br>
**Byte 3** - additional features
<br>

Byte 1 was the victim here. Upper nibble (bits 7-4) grant read access and lower nibble (bits 3-0) grant write access.

By default, 0xE3 is written as **04 FF 00 FF**, meaning the first byte's both nibbles are set to allow full access / unrestricted NDEF.
In this case, the app set the CC to **04 00 00 FF**, telling the 1st byte the entire NDEF requires authentication to read and write.

This does not _necessarily_ mean the biochip is protected by a password, since to do so there must be an actual password written in **0xE5**, **0xE6**, and **0xE7**, which are the PWD, PACK (pass ack), and the config page, however telling the CC the NDEF is locked by itself stops your phone and your shit ass RC522 from reading it and seeming bricked regardless, the same way goes if the CC is set as unlocked but the password pages are written, the tag will still demand the password at RF level.

So this might not be properly called a scam... but if an app edits out important operational pages without my consent and makes me pay to go back to default, it's a scam for me lol.

Once again: buy better electronics.

Nevertheless, I did learn new stuff from this and will surely play with it a little more, it's been fun. Hope that my mistakes teach someone else and I love you <3

And here's my newly pierced hand:

![Image 3](@assets/mao.jpeg)
