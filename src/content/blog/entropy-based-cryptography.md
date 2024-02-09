---
title: Entropy based cryptography
description: How random is security?
publishDate: 2023-12-05
# layout: ../../layouts/ExampleBlogPostLayout.astro
---

# Entropy based cryptography

Entropy is a measure of randomness, which means its value changes depending on the amount of matter that is present, leading us to the core concept of cryptography.
Computer security strongly relies on cryptography, however, computers are deterministic machines unable to generate true random numbers.

> Any one who considers arithmetical methods of producing random digits is, of course, in a state of sin. For, as has been pointed out several times, there is no such thing as a random number—there are only methods to produce random numbers, and a strict arithmetic procedure of course is not such a method.

~ John von Neumann

The existence of true randomness is debatable; it is defined by the result of no unpredictability, a system with the highest form of entropy (truly random) holds no pattern, no deterministic output, and no seed value – unlike pseudo randomness, which depends on a number (or vector) in order to initialize an output generator.

Computers generate pseudo randomness by using algorithms based on recursive methods on a base/seed value, such as a set of vectors 

$$x_0, x_1, ..., x_n$$ 

and a linear recurrence relation generating 

$$x_{n+k} = f(x_k, x_{k+1}, x_{k+m}, r, \Alpha)$$ 

where the seed has direct impact on the output value. On the other hand, true entropy is obtained dynamically through random and microscopic fluctuations in physical processes, such as the occurrence of an isotope’s radioactive decay, atmospheric or thermal noise, external electromagnetic, or even noise produced by computer components, rather than by deterministic inputs.

In order to generate truly random cryptography we’d have to leverage physical phenomena into security systems. [NIST](https://www.nist.gov/) provides a set of standards and compliancies for entropy for cryptographic use such as the [NIST SP 800-90B](https://csrc.nist.gov/pubs/sp/800/90/b/final)  suite to validate high quality randomness for cyber security, used for the encryption of PGP keys ([send me an encrypted message!](/contact/)), generating cipher text from mouse and keystrokes interactions.

![entropy diagram](@assets/entropy.png)

This standard requires the seed to have at least the number of bits of entropy as the rated security strength of the pseudo random number generator mechanism. For example, a generator using AES-256 requires
at least 256 bits of entropy input in order to achieve its maximum security strength of 256 bits.

Nevertheless, fetching entropy from a continous noise source on a machine (usually human input, fan noises, or internal clock drift) may require an unbiasing process where the sound is sampled and put under a pseudo random function do distribute entropy uniformly across bits of output 

The multi scale sample entropy (MSE) is widely used for multi scale entropy analysis, it is defined by the logarithmic likelyhood that a small section of the data (lenght M) matches with other sections as it increases by one.

![sample entropy diagram](@assets/sample-entropy.png)

Conversely, as the number of devices progressively outgrow the number of humans on the planet, laveraging easily accessible and high quality entropy in a digital system has become a critical challenge in cyber security. Not only cryptographic keys require pure levels of randomness, but also the DNS depends on it for transaction IDs, and web application frameworks relying on virtual machines are having hard access to entropy.

This modern scenario is changing the very web weave of the internet and communication to the level of quantum computers offering Entropy as a Service (EaaS), standing to create the basis of a future ecosystem of servers providing verifiably good quality entropy on request and unlocking the full potential of cryptography.



