---
title: Entropy based cryptography
description: How random is security?
publishDate: 2023-12-05
# layout: ../../layouts/ExampleBlogPostLayout.astro
---

# Entropy based cryptography

This post has been edited in December 26th due to some mistakes along the text.

> Any one who considers arithmetical methods of producing random digits is, of course, in a state of sin. For, as has been pointed out several times, there is no such thing as a random number—there are only methods to produce random numbers, and a strict arithmetic procedure of course is not such a method.

~ John von Neumann

Entropy is a measure of randomness, meaning that its value oscillates according to the amount of matter present in a system, leading us to the main concept of cryptography. Computer security relies heavily on cryptography; however, machines are deterministic — incapable of generating true random numbers.

The existence of true randomness is debatable; it is defined by the absence of predictability. A system with the purest form of entropy maintains no pattern, no deterministic output, and no seed value. In contrast, pseudo-randomness depends on a number or vector (seed value) to initialize a result generator.

**Pseudo-Random Number Generators (PRNGs)** use deterministic algorithms based on operations on a base value/seed, hence their result completely determined by their initial state. Widely used in various applications, notable PRNGs include:

* **LCG (Linear Congruential Generator):** One of the oldest and simplest generators, it uses a linear formula to generate a sequence of numbers. It is based on the formula $$X_{n+1} = \frac{a \cdot X_n + c}{m}$$, where $$X_n$$ is the n-th number in the sequence; $$a$$, $$c$$, and $$m$$ are constants; $$X_0$$ is the seed.

* **Mersenne Twister:** One of the most used due to its long period (amount of numbers generated before the sequence repeats itself), it is based on the linear recurrence $$X_{k+N} = X_{k+M} \oplus X_{k}D$$,for all $$k \geq 0$$, where $$M < N \in \mathbb{N}$$ are given and fixed values that determine how far back in the past the current state vector should look at to calculate the next state.

* **Von Neumann:** The algorithm is based on taking a number, squaring it, and using the middle digits of this result as a "random number," which will act as the seed for the next iteration.

* **Xorshift:** And its variations, it is a vector of bits; at each step, the next state is obtained by applying a certain number of XOR operations to blocks of $$w$$ bits in the current state, where $$w = 32$$ or $$64$$.

**True Random Number Generators (TRNGs)** are devices or systems that produce random numbers from intrinsically unpredictable physical phenomena; they are based on processes that cannot be predicted nor replicated by a deterministic computational model. Their seed value originates from sources with high entropy.

Entropy refers to a measure of uncertainty and randomness in a system. If we assume that all available data belong to one class, it will be easy to predict the class of a new data point. In this case, the entropy is zero. Entropy varies between 0 and 1 and reaches its maximum value when all probabilities are equal.

In its true state, entropy is obtained dynamically through random and microscopic oscillations in physical processes, such as the occurrence of radioactive decay of an unstable isotope, atmospheric or thermal noise, external electromagnetism, or even noise produced by computer components, instead of deterministic events.

Claude E. Shannon was a pioneer in defining entropy as a measure for information theory. Shannon measures the predictability of future values based on the probability distribution of amplitude values already observed in some base signal. It statistically quantifies the probability density function of the distribution of values, being able to detect aspects of nonlinearity in modeled series, contributing to a more reliable explanation of the nonlinear dynamics in various points of analysis, which, in turn, improves the understanding of the nature of systems characterized by complexity and imbalance.

When an event $$E$$ occurs with probability $$p$$, the uncertainty is denoted by $$S(p)$$. If the probability of a class occurring is $$1$$, the representation is $$S(1)=0$$. According to Shannon, the probabilities of a class occurring are $$p_1, \; p_2, \; p_3, \; \dotsc, \; p_n$$, and the uncertainty is measured by the entropy variable $$H$$. A $$139 \times 228$$ matrix is used for this study.
$$H(x) = -K \sum_{i=1}^{n} p_i \log_2 p_i$$
which is known as Shannon Entropy.

Whatsoever, in the computational context, to obtain truly random cryptography, we need to intertwine physical phenomena with security systems. Institutions like the NIST (National Institute of Standards and Technology) provide guidelines and requirements to ensure high-quality entropy in random number generation (RNG) systems, such as the **NIST SP 800-90B** suite, which requires that the seed has at least the number of bits of entropy equivalent to the nominal strength of the PRNG. For example, a generator using SHA-256 requires at least 256 bits of entropy input to reach its maximum security strength.

Obtaining entropy from a continuous noise source in a machine (most often: human interaction, fan noise, or internal clock drift) can result in biasing the data, thus requiring a process of debiasing where a sample of the data is collected, which is finally put under a pseudo-random function to distribute the entropy evenly among the output bits; on this occasion, cryptographic hashing functions such as, again, the SHA-256 algorithm are used.

There is also the widely used technique of hashing, which involves feeding SHA-256 with the byte sequence (256 bits, following the NIST standard) that represents some source of entropy, and in turn executing the digest method which will return the hexadecimal representation of the hash in a string of 64 characters representing the input bits uniformly dispersed. Hashing helps to uniformize the distribution of the existing entropy but cannot increase the total entropy if the original input is of low entropy.

However, it is risky to seek absolute cryptographic security in an algorithm whose keys are in the hands of the NSA.

Alternatively, it is also possible to address entropy bias using the XOR operator on input bits from two or more different entropy sources, XORing sample by sample iteratively.

Nevertheless, it is imperative to seek high entropy for input values, making it important to measure the quality of each sample, using, for example, Multiscale Sample Entropy (MSE), used to analyze entropy at various scales, evaluating the logarithmic probability that sections of the data correspond to other sections as they increase by 1 over time, thus measuring how biased the numbers are or the entropy of a time series of data. Like any entropy measure, the goal is to assess the complexity of a time series. One of the main reasons to use a multiscale approach is when the relevant time scale in the time series is unknown. For example, when analyzing atmospheric noise, it would be relevant to consider the time scales of the noises instead of the individual sounds.

For this, besides true random number generators (TRNGs)—non-deterministic—there is also the presence of Cryptographically Secure Pseudo-Random Number Generators (CSPRNGs), designed to resist statistical analyses, collecting a certain amount of entropy from physical sources and transforming it into a long sequence of pseudo-random numbers sufficiently unpredictable to be secure in cryptographic applications. Such notable generators include:

* **Fortuna:** Utilizes multiple entropy pools, is based on AES (Advanced Encryption Standard), and practices reseeding when the first pool reaches a certain limit of collected entropy bytes.

* **Yarrow:** Also uses multiple entropy pools and hash functions to condition the bits before aggregating them to the pools, based on Triple-DES and AES.

Conversely, as the number of devices progressively outgrow the number of humans on the planet, laveraging easily accessible and high quality entropy in a digital system has become a critical challenge in cyber security. Not only cryptographic keys require pure levels of randomness, but also the DNS depends on it for transaction IDs, and web application frameworks relying on virtual machines are having hard access to entropy.

This modern scenario is changing the very web weave of the internet and communication to the level of quantum computers offering Entropy as a Service (EaaS), standing to create the basis of a future ecosystem of servers providing verifiably good quality entropy on request and unlocking the full potential of cryptography.

There remains the hope that the future embraces the revalidation of the fundamental chaos of the universe in favor of the human right to privacy, far from monopolies of elliptic curves in the language of the world.
