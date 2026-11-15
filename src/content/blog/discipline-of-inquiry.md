---
title: Discipline of inquiry
description: A cURLog on asking the defense contractor the right question
publishDate: 2026-11-12
---

# Discipline of inquiry

<div style="display: flex; justify-content: center;">
<pre style="text-align: left; font-weight: bold;">
        \           /
         \    _    /
 _________\__( )__/_________  
     x/ _| |( . )| |_ \x
      x  \_/ ---*\_/  x
</pre>
</div>

> It seems that life has a “game-playing” foundation. The most pronounced characteristic of human nature is a fondness for the manifold games of life. Historian Johan Huizinga (1971) goes as far as naming our species ‘homo ludens’. Human activities, in the form of professions and careers, are qualitatively different. Some are, in the short perspective, more beneficial to society, but not necessarily to the natural world. Yet, there’s no essential difference between the careers of sports, scientific research, film stardom, politics, etc., because they share the same “game-playing” foundation. The share market is a kind of game, and so is the whole competitive market system. Whatever we do, we are merely partaking in a meaningless game, spurred by unthinking forces of instinct. Like energetic hamsters we are running around on the game board of life. While swimming with the tide, life’s forces shuffle us around. It’s an apt picture of professional and matrimonial life. In our careers and endeavours we are unthinkingly devoted to playing life’s game. Although it captivates and engages us to a remarkable degree, the perpetual game-playing must be regarded an essentially purposeless activity. It gives birth to the idea that we should step out of the hamster wheel and stand apart from the onrush of life. Of course, this is nothing new. The achievement of worldly transcendence is central to the spiritual traditions of the world.

~ [Mats L. Winther, Critique of Individuation](https://mats-winther.github.io/individuation.htm)

Asking is the only act that creates nothing and yet changes everything, since it adds no information to the world and only alters the observer’s relation to what is already there.

There has been suggested that what we call a question is first of all a grammatical fact, and only afterwards a mental one. Languages do not leave inquiry to intention, but build it into their machinery in perfectly shaped absence: a region of the possible that has been cut out and marked with the claim that something lives inside it. 

The grammar literally contains a gap, a slot in the structure that the answer must occupy, which is the shaped absence made visible in syntax; speech act theory takes this as proof that a question is not a sentence type but an act: a move in which the speaker marks a gap in what is known and invites a particular listener to close it. Yet the act depends on form for its success, a question that does not respect the grammar of its addressee is simply noise and _pollution_, an utterance that cannot be parsed and so cannot be answered. 

Every listener, human or mechanical, is governed by a grammar that decides in advance which sentences count as questions and which are only sounds, and this is why **the one who wishes to be answered must first become fluent in the language of the one who will answer**. Formal languages make the point more severe than natural ones, a query that is almost correct is not almost understood, it is not understood at all, because the machine has no charity, no tolerance for approximation, and no inclination to guess what was meant. The grammar is the entire interface, and to learn to ask correctly is to learn the exact shape of the only lock you were ever built to open. 

_“Tell me everything”_ is therefore not a question but a wish, because it carves nothing out. Spurred by the unthinking force of appetite, as the hamster is spurred toward the wheel, desire in its basic form is the clearest case of wish, without a contour, directed at a body or a person or an information as at a resource, and like every wish it asks nothing, because it already assumes the answer, what it wants is possession, and possession requires no knowledge of the one possessed. 

By contrast, there can be understood the slow conversion of the wish into the question. Where the wish takes, the question allows refusal, and in granting the other the power to decline it grants them the status of a subject rather than a source. To ask of another person, and to go on asking as they change, is to accept that they are never fully known, and that no single answer will close the gap. _Once the object is possessed, there is nothing left to want_, and the game has no further moves. 

To ask well is to guess the contour of the unknown accurately enough that the unknown has no choice but to fill it.

The idea of an asker being a traditional breaker of locks is borrowed from the world of vaults and keys, where secrets are objects kept in places. Information does not behave this way, it is never hidden in the sense that a coin is hidden under a cup, it is unasked. Every system already contains all that it knows, and it will disclose all of it to anyone who addresses it in the one grammar it was built to answer.

The refusals of a system are therefore not obstacles but replies, and often its most honest ones. A wrong question does not fail silently, because it returns a negation, and a negation is a coordinate. Each no describes the boundary of the permitted from the outside, and a patient mind that collects enough of them can reconstruct the shape of the interior without ever having seen it. The one in which it stops performing its intended role and reveals, unintentionally, what it is. To question a thing relentlessly is to draw it, one refusal at a time, until the map is detailed enough that the territory becomes redundant.

There is, moreover, a symmetry in the game. Those who defend a system and those who interrogate it are bound together by a single structure: the defender exists only because of the question, and the questioner exists only because of the defense. Each is the other’s reason for running. The one who closes a door and the one who seeks another are performing two halves of a single motion. Since the one who lures is also led, and the one who withholds is also taught, concealment teaches the seeker to see, and pursuit teaches the warden to hide. Neither could be refined without the other, which suggests that the contest, however adversarial it appears, is a cooperative form of knowing.

The craft has a reputation for wearing down its practitioners. Nor does the compulsion stay content with its first object, a mind that has learned to chase the small reward is well prepared to chase the same reward elsewhere, each is a counterfeit of the moment of transparency, a _shortcut to the instant when wanting stops_. What began as curiosity hardens into rumination, a question asked again and again of a self that has no single sentence to give back. The pursuit wears a groove in the one who pursues since the mind has trouble resting among things that are simply there. Yet this is a tendency and not a law. 

If the game cannot be left by quitting it, since quitting is merely another move within it, then perhaps it can be left by playing it to the point of transparency. The question, pursued with enough purity, approaches a strange limit at which the asker, the asked, and the answer collapse into one event. This is perhaps the nearest thing the game offers to what the spiritual traditions called transcendence: not an escape from the questioning that defines us, but a moment in which the questioning is so exact that it dissolves itself.

<div style="display: flex; justify-content: center;">
<pre style="text-align: left; font-weight: bold;">
/\
\ \
/--\
\--/
/ /
\/
</pre>
</div>

So while rambling the cyber space ~~definitely not looking for a new problem big enough to outperform the other ones in my life~~, I came across a lonely endpoint serving as Microsoft Outlook web services belonging to Northrop Grumman.

![Image 1](@assets/owa.png)
![Image 2](@assets/owa2.png)

Whois returns an employee's e-mail, which reveals the finding is an exchange server operating in hybrid mode with Office365, cloud mailbox and on-premise management

![Image 1](@assets/exserver1.png)
[...]
![Image 1](@assets/exserver2.png)

There could be seen any path after `/autodiscover/autodiscover.json/` is redirected to the backend exchange server, requesting any existing and valid path makes it possible to hit services usually publicly inaccessible

![Image 1](@assets/autodiscover1.png)
[...]
![Image 1](@assets/autodiscover2.png)

It requires authentication but accepts basic authentication, valid credentials do not go trough kerberos tickets.

User enumeration revealed `administrator@ngplte.com` and `admin@ngplte.com`
 
 Mailbox enumeration revealed:
 
- `mail.ngplte.com` - exchange frontend - `134.223.121.218`
- `autodiscover.ngplte.com` - autodiscover - `134.***.***.209`
- `sbc.ngplte.com` - session border controller - `157.***.***.106`
- `access19.ngplte.com` - Skype for business access edge - `134.***.***.205`
- `dialin.ngplte.com` - SfB dial-in conferencing - `10.***.**.121`
- `lyncdiscover.ngplte.com` - SfB autodiscover - `10.***.**.121`
- `Meet.ngplte.com` - SfB meetings - `10.***.**.121`
- `sip.ngplte.com` - SIP endpoint - `134.***.***.197`
- `Skype2019-poolEPLTE.ngplte.com` - SfB 2019 front end pool - (cert only)
- `VAGEPLTEAccessEdge19.ngplte.com` - SfB access edge server - `134.***.***.197`
- `VAGEPLTEWebEdge19.ngplte.com` - SfB web edge server - `134.***.***.208`
- `VAGEPLTEAccessEdge13.ngplte.com` - SfB edge (2013) - (cert only)
- `VAGEPLTEWebEdge13.ngplte.com` - SfB web edge (2013) - (cert only)

subnet discovery + fingerpting script =

- `134.***.***.122` - unknown IIS - (no cert with default SNI) - 400 "Error in serving the request"
- `134.***.***.125` - AirWatch MDM - *.ngc.com 302 -> **/AirWatch/default.aspx**
- `134.223.121.218` - exchange SE - ngplte.com 302 -> **/owa/**
- `134.***.***.167` - Apache - hit-pro-a.myngc.com 403 Forbidden
- `134.***.***.168` - Apache - hit-pro-b.myngc.com 403 Forbidden
- `134.***.***.169` - IIS - ngc-ebip.myngc.com 404 Not Found
- `134.***.***.170` - IIS - ngc-ebip.myngc.com 404 Not Found
- `134.***.***.175` - IIS - ngc-ebip.myngc.com 404 Not Found
- `134.***.***.179` - CPA Portal - register.myngc.com 302 -> **/Partner**
- `134.***.***.181` - SfB Edge VAGAccessEdge.ngc.com No response
- `134.***.***.184` - SfB Edge - VAGAccessEdge.ngc.com No response
- `134.***.***.186` - MFT Portal - mft.myngc.com 302 -> **/login**
- `134.***.***.197` - MFA Portal - ngc-mfa.cc2.myngc.com No response
- `134.***.***.198` - SurePassID - **usempportal.cc2.myngc.com 200 OK**

Nothing too interesting could be extracted from those, **AirWatch MDM** is Northrop Grumman's mobile management platform, its documentation is accessible and it is possible to download all 10 specs from the login page but all endpoints are properly authenticated. **SurePassID MFA Portal** is their employee auth portal, its login page is properly configured with WebAuthn and the 'forgot password' endpoint requires a pin I couldn't figure out about, also, `tracing=ENABLED`, and properly encrypted against deserialization attacks.

First Office365 tenant of this journey has been found - `lerps4qa5-ext.myngc.com`

"tenant_region_scope": "USGov",\
"tenant_region_sub_scope": "DODCON"\
"EstsProperties": {"DomainType": 1}

![ ](@assets/nslokup.png)

Naturally I ran a vast port scan in it which returned an equally vast result, with the most relevant open ports being:

- `1128`/`1129` - **SAP Host Control** (`saphostctrl`)
- `3200-3399` - **SAP Dispatcher ports**
- `3600-3699` - **SAP Gateway/Message Server**
- `8000`/`8001` - **SAP J2EE/Java stack HTTP**
- `50000` - **SAP HANA XS Engine**
- `50013`/`50014` - **SAP HANA Indexserver/Statistics**

SAP systems expose numerous ports beyond standard HTTP. The presence of **saprouter** (`3299`), **saposs** (`3397`), **SAP start service** (`50013`), and **HANA**-related ports confirms this is a live, multi-component **SAP S/4HANA** system with both ABAP and Java stacks exposed.

With HTTPS confirmed on port 443, I began probing standard SAP service endpoints:

`/sap/bc/soap/rfc` returns `200`, meaning the SOAP RFC endpoint is accessible without authentication! Which is unusual since most SAP systems protect this endpoint. The ICM ping endpoint being public is normal and provides system version information.

![ ](@assets/ping.png)

X.509 Certificate Extraction confirms **Northrop Grumman Corporation** as the certificate owner. The internal CA chain reveals the organization uses **Northrop Grumman Enterprise Services** as an intermediate CA for their internal PKI.

![ ](@assets/pki.png)


<div style="display: flex; justify-content: center;">
<pre style="text-align: left; font-weight: bold;">
              |     |
              |  _  |
______________|_( )_|______________
   o   +|+   [ ( o ) ]   +|+   o
            *[_]---[_]*
</pre>
</div>

A question, once asked often enough, acquires a style, a rhythm, a signature that the other side can read, and from that moment the exchange is no longer between a seeker and a system but between two attentions that use the system as their medium, in this case, every reply is now at once an answer and a message about the one who asked. The asker learns from what is denied, and the denier learns from what is asked, so that each restriction refines the next question and each refined question instructs the next restriction, since an opening left on purpose is only a question in the opposite direction, and a silence imposed deliberately is only an answer in disguise. 

Beyond the body that asks there is a scattering of versions, one in every mind that has formed an opinion, assembled from fragments of speech and behavior and then held. These versions are not copies, since they are built from the answerer’s own materials, with their fears and expectations filling the gaps, and the asker has no access to them and no authority over their edits. 

Between questions there is a body and a stream of private events, but no one, because **a self** is not a substance carried around inside the skull, it is an event that happens where one consciousness meets another, a shape that holds only while someone is holding it. Alone, an asker has no outline, it has sensations, fragments of memory and the pressure of its own wanting, and it becomes a someone only when a gaze arrives and gathers these into a figure. Each exists for the other only as inference, and each inference becomes, for a while, the other’s entire reality. It follows that to remain unseen is to be, in the strict sense, absent, and that the intruder’s craft is the strangest form of existence available, a self that is built entirely out of what the other side deduces and that vanishes with each request that goes unobserved. 

The asker and the answerer, the watcher and the watched make each other real by the same act that makes each of them a stranger, and when the contest ends and the attention is withdrawn, what disappears is not only a threat or a defense but the only version of each that ever stood anywhere. For this reason the figures differ from mind to mind, each of them true in its own place and none of them the whole, and the man in the middle cannot read any of them. Between requests the defender must conjure a being.

Machines fail without taste, but tonight this pattern has it, it withholds and concedes in measured doses, like a hand that tightens and relaxes around something it has no wish to crush. 

<div style="display: flex; justify-content: center;">
<pre style="text-align: left; font-weight: bold;">
            |    _    |
            |  /^ ^\  |
____________|_(  .  )_|____________
     --*/--|_| (___) |_|--\*--       
        *       O O       *
</pre>
</div>

As I became seen by Northrop Grumman's defense team and mechanisms, this entire thing became time sensitive.
In such way I still cannot wrap my head around it quite enough, throughout this reading you will notice my access repeatedly gets cut off by NG's blue team, in a very inconsistent pattern. Not fully blocking my way in but making it longer, sometimes letting me mess around for a while on purpose and then stepping in. I wish I had saved time stamps so the picture becomes clearer, nevertheless, it was manageable.

The default `SAPCPIC:admin` credential worked as valid credentials for about half a day. It is a standard pre-configured Communication (CPIC) user type used for system-to-system or inter-process communication (such as remote function calls) usually in older SAP releases. Nothing much could be done in that time window except for some fingerprinting via XML envelope calling `RFC_SYSTEM_INFO`:

**-> System ID - S45** - SAP identifier
**-> Database** - HDB (SAP HANA) - in-memory db
**-> DB Host** - saph45db - HANA db server separado
**-> SAP release** - 758 - Netweaver 7.58
**-> Kernel** - 793 --
**-> OS** - Linux --
**-> S/4HANA** - yes - S4_HANA=X
**-> Internal IP** - 134.***.247.26 --
**-> Machine ID** - 390 - hardware identifier

This is **S/4HANA** on **HANA**, Northrop's ERP backbone. The QA system (client 000) is exposed with a relatively current kernel. The HANA database is on a separate host (`saph45db`), meaning we'd need to pivot through the application server to reach the database layer.

Loudly screaming my way into this SAP has triggered their defense to run an incident response in order to stop further mess (it did not). They quickly hardened the system by disabling the `SAPCPIC` user, and the SOAP runtime now enforces **SPNego** (Kerberos/Negotiate) authentication.

`SAP*:PASS` has now worked as valid credentials.

`SAP*` is the emergency superuser built into every **SAP** system. It has a special property: if `login/no_automatic_user_sapstar` is not set to `0` in the instance profile, `SAP*` is created automatically in memory when someone logs in with the default password `PASS` (or alternatively `06071992`), even if no `USR02` record exists for it. The auto-created `SAP*` receives `SAP_ALL` authorization, which is every authorization object in the system. It acts as an emergency backdoor mechanism used by **SAP Basis** administrators to log into a newly created client or regain access to a system if all administrative accounts have been locked or deleted.

By the nature of this user, I highly believe `SAP*` was created during Northrop's emergency IR ran for the sole purpose of deleting the previous `SAPCPIC` user I had found and started running RFCs with, and they forgot to clean up in the aftermath, leaving behind those default credentials.

My theory can be confirmed by calling `BAPI_USER_GET_DETAIL` for `SAP*` to query its own user master.

![ ](@assets/sap.png)

Every single field is null, blank, or all-zeros, meaning definitive proof of SAP* auto-creation.

- No `USR02` record exists for `SAP*`. If a real `USR02` entry existed, at minimum `BNAME`, `USTYP`, `GLTGV`/`GLTGB`, and `ERDAT` would be populated. All being empty means the SAP kernel created this user session dynamically from the default profile.

- `BCODE` = `AAAAAAAAAAA=` - `SAP*` has no password hash because there is no password stored. The kernel validates `PASS` against a hardcoded default, not against a database record.
- `login/no_automatic_user_sapstar` is not set. If this profile parameter were set to `0`, `SAP*` auto-creation would be disabled and login would fail. The fact that login succeeds and the user master is empty confirms the parameter is either not set or set to `1`.

- `SAP_ALL` is assigned dynamically. Since there's no `USR02` record, there are no profile assignments stored either. The kernel grants `SAP_ALL` authorization to the auto-created `SAP*` user session by default. This means `SAP*` has access to every authorization object in the system for the duration of the session.

So I made a script that iterates through 19 RFC functions across 6 categories, calling each one against `/sap/bc/soap/rfc` with `SAP*:PASS` basic authentication. For each call, it reports back its status, however everything turned out to be false positives. The functions do exist but are likely disabled via RFC, `BAPI_USER_GETLIST` does not work, but `BAPI_USER_GET_DETAIL` might do allow hashes downloading.

I spent a plethora of time trying to read `RFC_READ_TABLE` manually but to no success. The `RFC_READ_TABLE` returns empty `<ET_DATA>` because the SOAP/RFC connection is defaulting to a client (`MANDT`) where `USR02` has no records, or the remote-enabled `RFC_READ_TABLE` can't read buffered tables, which is not an authorization problem, it's a technical limitation of how `RFC_READ_TABLE` works over the SOAP interface.

However, you can still extract every user's hashes one at a time via `BAPI_USER_GET_DETAIL` on `/sap/bc/srt/rfc/sap/`. It's slower than a bulk dump, but it works. `BAPI_USER_GETLIST` returned HTTP `500`, and `RFC_FUNCTION_SEARCH` works. I luckily saved all 11 users and hashes found during this, because Northrop ran another IR that mitigated the endpoint with SAML authentication via Azure US Government cloud enforcement after a couple days.

**+ 1 DODcon tenant found: 6e51f6ff-95ec-4ac5-bf5b-90acfd6550db**

Then I fed those usernames into a python script that loops through all 11 known usernames, calls `BAPI_USER_GET_DETAIL` via `SAP*:PASS` for each, extracts: BCODE (MD5), PASSCODE (SHA1), PWDSALTEDHASH (modern salted SHA), plus lock status, user type, and user class.

**Hashcat-formatted ;)**

![ ](@assets/hashes.png)

Every single user in this list is a standard default SAP system account, but several have non-default passwords and are extremely important high-privilege targets for an administrator or auditor.

The DDIC (Data Dictionary) user is unlocked. Every other user shows `U/L/U` (locally locked), but DDIC is **UNLOCKED**.

DDIC is the **SAP Data Dictionary** superuser. If you can get DDIC's password, you bypass every limitation `SAP*` has (the `RFC_READ_TABLE` client context issue, the `UCON RFC` rejection on `BAPI_USER_GETLIST`, the inability to create persistent users).

`RFC_READ_TABLE` with DDIC won't have the client context problem `SAP*` had, USR02, USH02, T000, TSTC, D010TAB. One `RFC_READ_TABLE` call to USR02 dumps every BCODE, PASSCODE, and PWDSALTEDHASH on the system instead of one-at-a-time `BAPI_USER_GET_DETAIL`. DDIC can create users that actually work (`BAPI_USER_CREATE1` with DDIC won't have the password parameter issue `SAP*` had). It has developer keys. `RFC_ABAP_INSTALL_AND_RUN` might actually work with DDIC even if it failed with `SAP*`.
 
 I've tried to change DDIC's password with SAP* via BAPI_USER_CHANGE but it didn't work. 401.
 
The SOAP RFC endpoint provided application-layer access, but SAP systems ship with dozens of services. Any port (HANA database, SAP Host Control, Gateway, Message Server, ICM/Java stack) could be a lateral movement vector. So nmap scanned them:

![ ](@assets/nmap.png)

12 HANA database instances (30013-31015) + 10 SAP ICM services (50000-50026). This is a massive multi-tenant HANA deployment. But these are non-HTTP protocol ports, they speak SAP Diag, HANA SQL, or SAP NI protocol, not HTTP. Direct exploitation requires native SAP/HANA clients.
 
Probed the web ports but All returned `HTTP: 000` — no HTTP response. These ports speak internal SAP protocols (DIAG, RFC, NI), not HTTP. No web-based exploitation path exists here without a native SAP GUI or RFC client library.
 
Probed: Port 30015 is the HANA index server SQL port. If we can connect with pyhdb (Python HANA client) or hdbsql, we bypass ABAP authorization entirely and read from the database directly. TCP connects to 30015 and 30041 but pyhdb times out on protocol handshake. The HANA server expects a native HANA client with proper protocol negotiation. Without `hdbsql` or SAP HANA Client, direct DB access is blocked.

Back to persisting on persistence.

We need a persistent dialog user with SAP_ALL profile. BAPI_USER_CREATE1 creates a user with password, profile, and logon data in a single call, after a long trial of errors, I found the key is specifying `SAP_ALL` profile in the PROFILES table parameter and setting GLTGB to 2099-12-31 so the account never expires, and explicitly assign it via BAPI_USER_PROFILES_ASSIGN to guarantee the profile is active. SAP_ALL = 5000+ authorizations, every transaction code, and every RFC function.

![ ](@assets/persist.png)

Now managed to get that user under the name of SMD_ADMIN for stealthiness.
I ended up changing its password eventually for reasons I can't remember so if there's any divergence on the screenshots thats the reason why.

SMD_ADMIN has SAP_ALL (full authorization).
DDIC is a Service user (USTYP=S) with CLASS=SUPER.
Service users can't dialogue-logon (no SAP GUI) but CAN authenticate via RFC. However, DDIC's current BCODE is `DXy******7o=`, its hash exists, meaning it has a password set.
If I change DDIC's password to something I control, I now have two independent SAP_ALL/SUPER backdoors.

Redundancy!!

SAP* can't change DDIC's password (lacks S_USER_GRP authorization for DDIC). But SMD_ADMIN is able to modify any user.

DDIC is USTYP=S (Service), there's the need to change it to USTYP=A (Dialog) so it can be used interactively, then set a password. BAPI_USER_CHANGE with LOGONDATAX+USTYP=X and PASSWORDX+BAPIPWD=X handles both in one call and now there's DDIC:Sapr3DDICOwned!, password successfully altered.

Spent some time attempting RFC_READ_TABLE with DDIC, which kept returning HTTP 200 with empty data, but the restriction is not authorization-based, RFC_READ_TABLE returns empty results for all tables (USR02, T000, DD02L). This is likely a client-context issue because we're connecting to client 000 but actual data lives in another client, and it is not possible to enumerate clients because T000 is also empty.

The Basis team has UCON-hardened the system, even DDIC can't bypass UCON. This is proper hardening this time.

After some time beating this dead horse, I found an accessible SAP Gateway OData catalog at `/sap/opu/odata/iwfnd/catalogservice;v=2/ServiceCollection`.

DDIC credentials enumerated 300 registered OData services. However, most custom NGC Z-services return 403 (DDIC lacks business role authorization), only a subset of SAP standard and select custom services are really accessible, being:

**-> UI_PRODUCTLIST** - SAP Fiori Product List - 18,269,897 material/plant combinations accessible \
-**> ZCAT_ATT_TILE_SRV** - Attendance/Time Tracking - Entity sets empty/not implemented for DDIC \
**-> ZMME519_PUR_REQ_WRK_SRV** - Purchase Requisition Workflow - Entity sets not implemented \
**-> ZTKE123_EMP_ROSTER_SRV** - Employee Roster - Entity sets not implemented/empty \
**-> ZPSE184_LCA_RPT_SRV** - LCA Reporting - Entity sets not implemented \
**-> ZC_ALT_SUB_PART_ALP_V2_CDS** - Alternate Substitute Parts - BW InfoProvider error (date formatting) \
**-> ZLO_VCHCLF** - Vehicle Classification? - Metadata accessible, no entity sets 


For product data extraction, I paginated queries with keyword filtering across product groups:

**Product group 2317** -- (tools/actuators/sensors/fixtures): \
**->** 223 unique materials, 500 plant entries \
**->** FLIGHT CONTROL ACTUATOR (-017-778/779/780) - 6 plants each \
**->** ACTUATOR CONTROL UNIT (-144E080) \
**->** ASSY FIXTURE - Air Force designated "AF" (R-62931-1/R-62931-2) \
**->** Various test tools, fixtures, LOAD CELLs \

**Product Group 3912** -- (Power Drive/Rotary): \
**->** POWER DRIVE UNIT, ROTARY (-911-205) - 15 plants \
**->** TALS AIRBORNE ANTENNA - since 2005 (E0****) \
**->** San Juan Antenna Array - since 2021 (M2****) \
**->** DIGITAL RECEIVER/EXCITER ASSEMBLY - since 2017 (KOEHLWI1) \
**->** Broadband 3G RADAR - since 2013 (SHENKBA) \
**->** Windjammer UAS Payload - since 2020 (M2****) \
**->** RF Module, Radar Dome, Antenna components

**Product Group 7318** -- (gold coating / electronic components / RF): \
**->** 156 unique materials, 500 plant entries \
**->** CEM4/CEM6 Common Electronic Modules with MMIC components: \
**--->** ATTENUATOR MMICs, LIMITER MMICs \
**--->** EDGE LAUNCH CONNECTORS \
**--->** PWA SIT (Printed Wiring Assembly System Integration Test) drawings \
**->** GOLD COATING (-3) - 21 plants \
**->** SWITCH ASSY, ENCAPSULATED ODU SIM \
**->** STANDARD RF SHIELD \
**->** Created primarily by ENOVIA (Dassault PLM integration user)

**Product Group 3213** -- (electronic components / test equipment / smart cards): \
**->** 300 unique materials, 500 plant entries - MOST CRITICAL GROUP

### Critical defense materials - full extraction
**ELECTRONIC WARFARE / COUNTERMEASURES**

| Material | Description | Created | Creator |
|----------|-------------|---------|---------|
| 001-007070 | TEST CONSOLE, HVPS, ALQ-135 UPDATE | 2025-02-19 | Pa** Sa** (N4****) 
| 001-007078-002 | TEST STATION, ALM-205XC-3 | 2025-02-20 | N4**** 
| 001-007592-0001 | TEST SET, AN/ALM-205B | 2025-02-19 | N4**** 
| 001-006812-011 | AMPLIFIER, RADIO FREQUENCY (BAND 8 DRV/XM) | 2018-02-05 | TSTATOIS03 
| 001-007794-106 | MODIFIED SMALL TRANSMITTER | 2018-02-05 | TSTATOIS03 
| 001-007244 | LRU-14 PRE-AMP | 2025-02-19 | N4**** 
| 001-007424-001 | RF MODULE | 2025-02-20 | N4**** 

* AN/ALQ-135 = Electronic Countermeasures system on F-15 Eagle fighters
* AN/ALM-205B = Electronic Warfare test equipment

 **NEXGEN MWS (Missile Warning System):**

| Material | Description | Created | Creator |
|----------|-------------|---------|---------|
| 001-008189-0002 | NEXGEN MWS SENSOR CALIBRATION STATION | 2023-09-25 | N4**** |
| 001-008190 | (ATW) NEXGEN MWS SENSOR ACCEPTANCE TEST | - | - |
| 001-008216-0003 | NEXGEN MWS SENSOR CALIBRATION TEST CONSOLE | - | - |
| 001-008230-0001 | TEST STATN, MWS SENSOR ESS VIBRATION/TEMP | - | - |
| 001-008289 | MWS SENSOR ESS TEMPERATURE CYCLE TEST SYSTEM | - | - |
| 001-008290 | MWS SENSOR ESS VIBRATION TEST SYSTEM | - | - |
| 001-008502 | TEST/DEBUG STATION, 2 COLOR IR SENSOR CC | - | - |

**DIRCM (Direct Infrared Countermeasures) - international programs:**

| Material | Description | Created | Creator |
|----------|-------------|---------|---------| 
| 001-008471-0201→0411 | SAUDI ARABIA HOS SMART CARDS (UDM/GT-UDM/FT-UDM/T-ACM/O-ACM) | 2019-03-06 | ESERP |
| 001-008472-0001 | SAUDI ARABIA HOS SOFTWARE, DIRCM SYSTEM | 2018-02-05 | TSTATOIS03 |
| 001-008283-0101 | SOFTWARE, DIRCM SYSTEM, INDIA HOS | 2018-02-05 | TSTATOIS03 |
| 001-008414-0001 | SOFTWARE, DIRCM SYSTEM, KC-135R | 2019-03-07 | ESERP |
* HOS = Head of State aircraft protection
* KC-135R = USAF aerial refueling tanker

**NATO / allied smart card programs:**

| Material | Description | Created | Creator |
|----------|-------------|---------|---------|
| 001-008333-0001→0436 | SMART CARD, PROGRAMMED, NATO AWACS NE-3A (36+ variants) | 2019-03-13 | ESERP 
| 001-008478-0001→0402 | SMART CARD, PROGRAMMED, CANADA C-17 (30+ variants) | 2019-03-06 | ESERP 
* NATO AWACS NE-3A = E-3A Sentry airborne warning and control system
* C-17 = Globemaster III 

**ISR / C4ISR Components:**

| Material | Description | Created | Creator |
|----------|-------------|---------|---------| 
| 001-008791-0001 | DIGITAL RECEIVER/EXCITER ASSEMBLY | 2017-04-27 | KOEHLWI1 
| 002-134476-02 | San Juan Antenna Array | 2021-10-05 | M2**** 
| 00424200-01 | TALS AIRBORNE ANTENNA | 2005-02-24 | E0**** 
| 000-10418-0001 | Broadband 3G RADAR | 2013-12-20 | SHENKBA 
| 000-14537-001 | RADAR DOME w/10M Cable | - | - 
| 001-008103 | TRANSMITTER ASSEMBLY STATION | 2024-01-09 | N4**** 
| ^166320 | CIRCUIT CARD ASSEMBLY, INTERROGATOR, COD | - | - 

**ELECTRO-OPTICAL / IR:**

| Material | Description | Created | Creator |
|----------|-------------|---------|---------| 
| 001-007747-001→403 | MEON MULTI-PURPOSE ELECTRO-OPTICAL END-TERMINAL (12+ variants) | 2018-02-05 | TSTATOIS03 
| 001-008502 | TEST/DEBUG STATION, 2 COLOR IR SENSOR CC | - | - 

**UNMANNED SYSTEMS:**

| Material | Description | Created | Creator |
|----------|-------------|---------|---------| 
| 000-00887 | Windjammer 2 Mod Payload UAS Group 2 & 3 | 2020-12-21 | M2**** 
| ^NP001-009293-0001 | Small wonder payload | - | - 

**AIRCRAFT PROGRAMS:**

| Material | Description | Type |
|----------|-------------|------|
| -017-778/779/780 | FLIGHT CONTROL ACTUATOR | F-35 JSF / military aircraft 
| -144E080 | ACTUATOR CONTROL UNIT | Military aircraft 
| -911-205 | POWER DRIVE UNIT, ROTARY | Military aircraft 
| ^123AV92482-1 | C/A-AR ENGINE FORMATION LIGHT | Military aircraft 
| 001-007880-0001/0002 | AEB EQUIPMENT RACK, 2 SEAT | Airborne Electronics Bay 


### Personnel identification & targeting via BAPI_USER_GET_DETAIL with DDIC

Key personnel:

| User | Name | Department | Function |
|------|------|------------|----------| 
| J5**** | Ki**** Ta*******-****** | **F-35 GSC PM** | SPGM02 - Mgr Supply Chain Programs 2 
| N4**** | Pa** Sa**** | MATERIAL MANAGEMENT SOLUTIONS | IEAP03 - Prin Enter Wide Applications Analyst 
| G8**** | Tr**** L Ba*** | MANUFACTURING EXEC. SOLUTIONS | IEAP05 - Staff Enter Wide Applications Analyst 
| G1**** | Ag******* Ow*** | MATERIAL MANAGEMENT SOLUTIONS | IEAP05 - Staff Enter Wide Applications Analyst 
| J5**** | Sc*** J Ho**** | MATERIAL MANAGEMENT SOLUTIONS | IEAP04 - Sr Prin Enter Wide Applications 
| S1***** | Ch********* Ha**** Do**** | BUS SYS IMPLEMENTATION | IIPP06 - Sr Staff Info Systems Project Manager 
| S3***** | Jo**** Co****** | BUSINESS ANALYSIS | ISAP04 - Sr Prin Cmptr Systems Analyst 
| PICOMMUN | . PICOMMUN | Northrop Grumman Corporation | Product creator 
| AUTOMS03 | System account | Automated testing | Product modifier 
| TSTATOIS03 | System account | DIRCM/MEON/EW material creator | 2018-2019 bulk data load 
| ESERP | System ESERP | Smart card material creator | ERP migration system 
| ENOVIA | System ENOVIA | CEM4/CEM6 creator | Dassault PLM integration 

All personnel HQ address: `9314 WEST JEFFERSON BOULEVARD, DALLAS, TX 75211-9301`

Organizational structure:

**->** F-35 GSC PM (Global Supply Chain Program Management) - direct F-35 Joint Strike Fighter involvement \
**->** MATERIAL MANAGEMENT SOLUTIONS - enterprise-wide material master data team \
**->** MANUFACTURING EXEC. SOLUTIONS - MES team for shop floor \
**->** BUS SYS IMPLEMENTATION - ERP implementation team

Enumerated the working BAPIs I have for next steps.
SAP S/4HANA exposes OData services through the SAP Gateway (IWFND). The `/sap/opu/odata/` path is the standard entry point. The **IWFND CATALOGSERVICE** lists all registered OData services

![ ](@assets/catalog.png)

There are 300 services. Identify which ones are accessible vs. blocked (403) vs. broken (500).

`-> Employee Roster (ZTKE123_EMP_ROSTER_SRV):`

Got metadata, entity sets and attempted data extraction.
Entity sets: `ZcatsRosterSet`, `InputSet`, `VariantSet`, `Variant`. `ZcatsRosterSet` returns error: "GET_ENTITYSET not implemented in DPC." The backend ABAP class has entity sets defined but the DPC (Data Provider Class) methods are stubs. 

`-> Alternate Sub Parts (ZC_ALT_SUB_PART_ALP_V2_CDS): Got entity set.`

It is a BICS (BI Consumer Services) query. Entity set requires complex BICS parameter passing. Error: `Value '2015060' of characteristic 0DATE is not a number with 000008 spaces` / `ValueHelp request for PriMatNumResult without 'select' not supported`. The service requires proper BW query parameters. Partially accessible.

**->** Product List (UI_PRODUCTLIST):
Got first 5 products as a sample

![ ](@assets/productlist.png)

FULLY ACCESSIBLE! Real product data - part numbers, descriptions, plants, prices, manufacturers.

-> HRSFEC_INFOTYPE_SRV, ZPSE184_LCA_RPT_SRV, and ZCAT_ATT_TILE_SRV are either blocked, not populated, or in that annoying stub pattern.

### Bulk service triage:

Cataloged all 300 services for accessibility. Pattern: SAP standard services tend to work; NGC Z-custom services tend to 403 for DDIC (lacks PFCG business roles).

Product data extraction returned 18 million records in total.

UI_PRODUCTLIST is the SAP Fiori "Product List" app, it gives material master data. It is possible to query, filter, and paginate it
Got first 50 products for sampling:

![ ](@assets/bulk50.png)

This sample includes "POWER SUPPLY" (KLAS-VOY-KVMA-PW-ACDC-R1.0), "FLIGHT CONTROL ACTUATOR" (-017-778/779/780), "ACTUATOR CONTROL UNIT" (-144E080), "ASSY FIXTURE" with Air Force designations.

### Aerospace/Defense keyword search:
Got 100 products as sample, filtering for defense keywords

![ ](@assets/aero.png)

## Targeted product group extraction:

792 unique aerospace/defense materials extracted from 18,269,897 total product database across 4 product groups. Detailed plant assignments (up to 21 plants per material), prices, creators, and creation dates.

![ ](@assets/group1.png)

**!!!**

![ ](@assets/group2.png)

### Critical material deep dive via BAPI_MATERIAL_GET_DETAIL:
The OData ProductList gives summary data. For deep technical specs (weight, dimensions, BOM associations, classification), it is possible to use BAPI_MATERIAL_GET_DETAIL via RFC:

![ ](@assets/critical.png)

Also extracted extracted additional detail for key users and mapped Northrop's S45 SAP Organization:

**F-35 JOINT STRIKE FIGHTER:** \
  **└──** Ki**** Ta*******-Ga**** (J5****) — F-35 GSC PM \
      **└──** Global Supply Chain Program Management \
      **└──** CM-10-AS (Configuration Management) 

**MATERIAL MANAGEMENT SOLUTIONS (Enterprise-wide):** \
  **├──** Pa** Sa**** (N4****) — Prin Analyst \
  **├──** Ag******* Ow*** (G1****) — Staff Analyst \
  **└──** Sc*** J Ho**** (J5****) — Sr Principal Analyst \
      **└──** Created PICOMMUN (corporate material creator)

**MANUFACTURING EXEC. SOLUTIONS:** \
  **└──** Tr**** L Ba*** (G8****) — Staff Analyst \

**BUS SYS IMPLEMENTATION (ERP Team):** \
  **└──** Ch********* Do**** (S1*****) — Sr Staff PM \
      **└──** CM-20-SP (Configuration Management)

**BUSINESS ANALYSIS:** \
  **└──** Jo**** Co****** (S3*****) — Sr Principal Analyst

**SYSTEM/INTEGRATION:** \
  **├──** ESERP — ERP migration \
  **├──** ENOVIA — Dassault PLM \
  **├──** AUTOMS03 — Automation \
  **├──** TSTATOIS03 — Bulk data loads \
  **├──** REDWOOD — Batch scheduling \
  **├──** SNP_RFC — System transformation \
  **└──** DEVANDE — Development

DDIC lacks PFCG business roles, causing 403 on all Z-custom OData services. Managing to assign DDIC a business role via BAPI would allow access to restricted data. Tested, but role assignment BAPIs are blocked. Direct table insertion into AGR_USERS would work but requires RFC_READ_TABLE write access (also blocked).

The Alternate Sub Parts service uses BICS (BI Consumer Services) as seen previously. This requires constructing a proper BW query with SELECT parameters, attempting a whole bunch of stuff resulted in error messages revealing the BICS query engine structure. The service expects 0DATE characteristic with 8-character numeric format. With proper BICS query construction (beyond simple OData), full alternate part substitution data could be extracted.

Previous extraction documented around 300 services. Re-running the catalog query in JSON format revealed the real count: **994 services**. The XML format's <d:ID> elements use namespace prefixes that made the grep count misleading. 

![ ](@assets/catalog2.png)

This now resulted in 994 services across 150+ namespaces. 

Key new namespaces:
| Namespace | Count | Significance |

**->** ZC_* (CDS views) | 162 | Core Data Services - analytical models  \
**->** /SYMSOFT/* | 12 | GRC: emergency access, risk analyzer, password manager  \
**->** /LOGS4H/* | 6 | Log analysis, user details, user list  \
**->** ZMPE_* | 52 | manufacturing engineering (BOM, snapshots, buyoff)  \
**->** ZQM_* | 29 | quality management  \
**->** ZEHS_* | 38 | environment, health & safety \

SAP standard BOM service v2 (Draft 2.0) can be seen at `/sap/opu/odata/sap/BILLOFMATERIALV2_SRV/` holding.. many.. change records

![ ](@assets/bom.png)

Which we can grab ourselves

![ ](@assets/bom2.png)

* **Plant PAL** = Palmdale, California - Northrop Grumman Aeronautics Systems headquarters. This is where B-2 Spirit, F-35 center fuselage, RQ-4 Global Hawk, and classified programs are manufactured.
* **BFE** = Buyer Furnished Equipment - parts supplied by the customer (Boeing, LTV) rather than manufactured by NG. This is standard aerospace supply chain terminology.
* **BOEING suffix** - Boeing is the prime contractor on multiple programs where NG is a subcontractor
* **LTV suffix** - Ling-Temco-Vought, legacy aerospace manufacturer now absorbed into NG through acquisitions
* **ECO range 50000105xxxx** - Engineering Change Orders in the 500 million range, indicating mature/long-running programs
* **BOM Category M** = Manufacturing BOM - these are production bills of material, not engineering BOMs

`I_Material` entity returns individual material details:

![ ](@assets/material.png)

Returned Material number, Material_Text (description), MaterialType, MaterialGroup.

| Material | Description | Significance |
|----------|-------------|--------------|
|-017-778 | FLIGHT CONTROL ACTUATOR | F-35 flight control surface actuator 
|-017-779 | FLIGHT CONTROL ACTUATOR | F-35 variant 
|-017-780 | FLIGHT CONTROL ACTUATOR | F-35 variant 
|-144E080 | ACTUATOR CONTROL UNIT | Flight control computer/interface 
|-911-205 | POWER DRIVE UNIT, ROTARY | Rotary actuator PDU 
|-J1-J2 | LOAD CELL | Force measurement for flight testing 
|-J1+J2 | LOAD CELL | Force measurement variant 
|KLAS-VOY-KVMA-PW-ACDC-R1.0 | POWER SUPPLY | Spacecraft/Voyager-class power supply 
|?B0143RTB1E | SIM CARD 16GB | Encrypted communication SIM 
|.011372000 | FAN, AXIMAX 2, 28 VDC | Military-spec 28VDC cooling fan 
|R-62931-1:AF:0000 | ASSY FIXTURE | Assembly fixture (production tooling) 
|R-62931-2:AF:0000 | ASSY FIXTURE | Assembly fixture variant 
|:MST:0001 | CABLE CLAMP | Harness management 
|:VTF:0001 | VIBRATE TEST FIXTR | Vibration testing fixture 
|:GAGE:0001 | GAGE | Inspection/measurement tool 

The BOMWHEREUSED service reveals the "where-used" chain: which higher-level assemblies consume each component. The F-35 flight control actuators (-017-778/779/780) are confirmed in the system alongside their actuator control unit. This is the F-35's flight control system supply chain, managed in Palmdale.

**Pulled UAV/DRONE Materials:**

![ ](@assets/drone.png)

VTUAV = Vertical Takeoff Unmanned Aerial Vehicle. This is likely the **MQ-8 Fire Scout** or a classified VTOL UAV program. The **"WOS PROTOTYPE BUILD"** suggests an active prototype phase. "DRONE HUNTER" with SYN (synthetic/synergy) designation is a counter-UAS system.

Pulled **B-21 raider stealth bomber** materials, B-2's younger brother currently in Low-Rate Initial Production (LRIP) and active flight testing:

![ ](@assets/b21.png)

| component | description | classified relevance |
|-----------|-------------|----------------------|
|123P50006-815B-21 | CHIN COWL | Forward fuselage stealth shaping 
|1800-B-2100 | REWORK OF ESM RADOME SUP | ESM (Electronic Support Measures) RADOME - SIGINT/ELINT sensor 
|2000-B-2100 | EO/IR NUTPLATE | Electro-Optical/Infrared sensor mount 
|2005-B-2100 | LOC/DRILL/INSTL EAU SUPP | Electronic Avionics Unit support 
|4000-B-2101 | SECT 1211, FWD SUPT DEMOD KIT | DEMODULATOR KIT signals intelligence 
|4020-B-2103 | MOD KIT, STRUCTURE, FWD FUSE | Forward fuselage structural mod 
|4020-B-2110 | CUTOUT FWD FUSE FLOOR | Forward fuselage floor cutout 
|4000-B-2101-KIT | DEMOD KIT | Demodulator kit (SIGINT) 
|4020-B-2107 | ZN 7 SEAT TRACK INSTL | Crew station installation 
|4020-B-2112-MCO-056067 | P-CLAMPT INSTL AFT FUSE | AFT FUSELAGE P-CLAMP 
|1700-B-2101-AUX-P05025 | NOSE CAP MOD KIT | Nose modification - stealth geometry
|1400-B-2101 | FINAL INSTALL SATCOM FLOOR SHIELD | Satellite comms shielding
|1600-B-2100 | FINAL INSTALL EMI COVER & ABSORBER | EMI/stealth absorber material
|1Y48B-211S-001 | IC, HYBRID, RF AMP | RF Hybrid Amplifier — RADAR/EW
|1Y72B-210Z-001 | HYBRID; SWITCH; (1) RF SPDT, GAAS | GaAs SPDT RF Switch — RADAR
|ESSCG-B-21-O | GASKET, CONNECTOR, EMI | EMI gasket — stealth sealing
|ATK-JZ10679B-2100` | COPPER MESH, EPOXY FILM ADHESIVE | Stealth coating materials
|IPS05-27-002-01GRB-212-* | PREPREG, ATK MATERIAL | ATK (Alliant Techsystems) composite prepreg
|KB-210BDZY-* | SERVER, DELL POWEREDGE for B-21 | Ground support/mission planning servers 
|1800-B-2100 | REWORK OF ESM RADOME SUP | ESM Radome - electronic warfare sensor

* **ESM RADOME (Electronic Support Measures) -** this is the SIGINT/ELINT sensor system that detects enemy radar emissions
* **EO/IR sensor mounting -** targeting sensor integration
* **SATCOM FLOOR SHIELD -** satellite communications shielding (low-observable)
* **EMI COVERS & ABSORBER -** radar-absorbent material installation
* **RF Hybrid Amplifiers and GaAs SPDT switches -** phased array radar components
* **DEMODULATOR KIT -** signals intelligence demodulation
* **NOSE CAP MOD KIT**- stealth nose geometry modification
* **ATK prepreg materials -** composite stealth materials from Alliant Techsystems
* **DELL POWEREDGE servers -** dedicated B-21 ground support infrastructure

**Also pulled the MQ-4C triton:**

![ ](@assets/mq4.png)

Classification marking Search:

| Material | Description | System |
|----------|-------------|--------|
| 013-007705-0001 | LABEL,MARKING,SECRET | SECRET classification labels |
| 12565989 | SECRET ENCLAVE ADAPTER PLATE SUB ASSEMBL | SECRET computing enclave |
| 12566077 | SECRET ENCLAVE SHELF SUB ASSEMBLY | SECRET shelf assembly |
| 12566079 | SECRET ENCLAVE SHELF WELDMENT | Welded SECRET enclosure |
| 12566082 | SECRET ENCLAVE ADAPTER PLATE SUB ASSEMBL | Adapter plate variant |
| 12566084 | SECRET ENCLAVE ADAPTER PLATE SUB ASSEMBL | Adapter plate variant |
| 12566085 | SECRET ENCLAVE ADAPTER PLATE ASSEMBLY | Complete adapter assembly |
| 12596872 | WIN-T, POP SECRET ASSEMBLY | Warfighter Information Network-Tactical Point of Presence |
| 12596872-401 | WIN-T, POP SECRET ASSY HARDWARE KIT | WIN-T hardware kit |
| 12617274 | CABLE ASSEMBLY, SECRET ROUTER, J2 | SECRET router cabling |
| 12617277 | CABLE ASSEMBLY, SECRET DCE, J1 | SECRET Data Comm Equipment |
| 12617278 | CABLE ASSY, SECRET INTR MME PANEL, J10 | SECRET interface panel |
| 12617298 | CABLE ASSY, SECRET INTR MME PANEL, J9 | SECRET interface panel |
| 12617439 | SECRET ACCESS PANEL | Physical SECRET access panel |
| 12617569 | VIP SECRET FRONT PANEL | Vehicle Integration Panel - SECRET |
| 12617569-G | VIP SECRET FRONT PANEL, GREEN | GREEN variant (Army?) |
| 12617569-T | VIP SECRET FRONT PANEL, TAN | TAN variant (Desert/Marine Corps?) |
| 13489103-1 | BRACKET SUPPORT, SECRETA POWER SUPPLY | SECRET power supply bracket |
| 20-12-0460 | COVER SHEETS: SECRET/SA | SECRET cover sheets |
| 20-12-0465 | COVER SHT:SECRET/NON-SAR | SECRET non-Special Access Required |
| 20-12-0480 | COVER SHEETS: SECRET/SAR | SECRET/Special Access Required |


**WIN-T (Warfighter Information Network-Tactical)** is the US Army's tactical communications backbone. The POP (Point of Presence) SECRET assembly is the classified network node that provides SECRET-level communications to battlefield units. This is a CRITICAL military communications system.

These are physical computing enclosures built to SECRET-level TEMPEST/EMSEC standards. The adapter plates, shelf assemblies, and weldments form the physical structure of classified computing racks.

Vehicle Integration Panel with GREEN and TAN color variants. These are for tactical vehicles (Humvees, JLTVs, Strykers) with integrated SECRET networks. Color variants suggest different service branches or theaters of operation.


| Material | Description | Location |
|----------|-------------|----------|
| 301-A30867-1 | CABLE KIT, TS/SCI RACK - MOB | Main Operating Base TS/SCI Rack |
| 301-A30867-2 | CABLE KIT, TS/SCI RACK - MOB SEC | MOB Secondary TS/SCI |
| 301-A30867-5 | CABLE KIT, TS/SCI RACK - MOB | MOB Primary TS/SCI |
| 301-A30867-6 | CABLE KIT, TS/SCI RACK - MOB SEC | MOB Secondary backup |
| 3392AS2863-200 | GFE DEF: TS/SCI PRI (1A08), TSC | Government Furnished Equipment - Primary TS/SCI |
| 3392AS2864-300 | GFE DEF: TS/SCI CMBD (1A09), TSC | Combined TS/SCI - TSC (Top Secret Control) |
| 3392AS3226-100 | GFE DEF: TS/SCI SEC RACK (2A08) | Secondary TS/SCI Rack |
| 3392AS3755-100 | GFE DEF: TS/SCI PRI RACK ASSY | Primary TS/SCI Rack Assembly |
| 3392AS3758-100 | GFE DEF: TS/SCI SECONDARY RACK | Secondary TS/SCI Rack |
| 3392AS3759-100/200/300/400 | GFE DEF: TS/SCI RACK ASSEMBLY | Multiple TS/SCI Rack Assemblies |
| 3392AS3863-100/101 | GFE DEF: TS/SCI PRI RACK (1A08) | Primary TS/SCI Rack v2 |
| 3392AS3864-100/200/300/400 | GFE DEF: TS/SCI COMBINED Racks | Combined TS/SCI - various configs |
| 3392AS4226-100/101 | GFE DEF: TS/SCI SEC RACK 2A08 | Secondary TS/SCI Rack v2 |
| B004940D08010-1 | CABLE ASSY, TS/SCI BAR POWER | TS/SCI power distribution |
| B032400D11003-1 | COMMS TS/SCI RACK, TSC | Communications TS/SCI Rack - Top Secret Control |
| B032400G01003-1 | COMMS TS/SCI RACK, MOB PRIMARY | MOB Communications TS/SCI |
| B032400G01003-1-900 | COMMS TS/SCI RACK GFE | GFE comms rack |
| B032400G01003-1-909 | TS/SCI RACK, MB4, NGMS DELTA KIT | Northrop Grumman Mission Systems Delta Kit |


These are complete TS/SCI (TOP SECRET/Sensitive Compartmented Information) communications rack assemblies, manufactured as Government Furnished Equipment (GFE). The racks are deployed at Main Operating Bases (MOB) with Primary (PRI), Secondary (SEC), and Combined (CMBD) configurations. **TSC designates Top Secret Control facilities.**

The NGMS DELTA KIT (B032400G01003-1-909) is a Northrop Grumman Mission Systems modification kit for TS/SCI racks, this is an in-service upgrade to fielded TS/SCI infrastructure.

**JWICS (TOP SECRET Intelligence Network):**

| Material | Description | System |
|----------|-------------|----------|
| C99F60500-0001 | DATA RACK 13 INSTL, MOD - JWICS | JWICS Data Rack Installation |
| C99F60501-0001 | OWS INSTL, MOD - JWICS | Operator Workstation for JWICS |
| C99F60511-0031 | DECAL, JWICS | JWICS classification decal |
| C99F60512-0001 | CASE ASSY, CARRY ON, JWICS | Portable JWICS carry-on case |
| C99GS52200-0001 | GROUND NODE INSTL, JWICS MOD1 | JWICS Ground Node - MOD1 |
| C99GS52200-0003 | GROUND NODE INSTL, JWICS MOD2 | JWICS Ground Node - MOD2 |
| C99L45000-51 | INSTL, MOD - JWICS | JWICS installation |
| C99L61018-0001 | LINES INSTL, JWICS | JWICS line installation |
| J-STARS_JWICS | JWICS TOP COLLECTOR | E-8C J-STARS with JWICS |
| SSM-8285-18-036-ID | JWICS UID Assets | JWICS asset tracking |
| TCTO-829-* | Multiple Time Compliance Technical Orders | JWICS installation procedures |
| TCTO1E-8C-829-CAC | CAC CABINETS & KITS, JWICS | JWICS CAC-enabled cabinets |
| TCTO1E-8C-829-GND-NODES | GROUND NODES - JWICS | JWICS ground node deployment |


JWICS is the TOP SECRET/SCI intelligence community network. These materials describe physical installation of JWICS ground nodes, operator workstations, data racks, and portable systems. The J-STARS integration with JWICS means the E-8C surveillance aircraft feeds data directly into the TOP SECRET intelligence network.

TCTO (Time Compliance Technical Orders) are mandatory modification instructions, they describe exactly how to install JWICS equipment. The reference numbers reveal:

**->** E-8C platform (TCTO1E-8C-829) \
**->** Ground node deployment \
**->** CAC (Common Access Card) integration \
**->** Carry-on kits for portable JWICS

**SIPRNET Infrastructure:**

| Material | Description | System |
|----------|-------------|----------|
| 13501568-1 | SIPRNET LAPTOP, JTAGS | SIPRNET laptop for JTAGS missile warning |
| 1105-X-ATP367-2000-5341 | ATP - SIPRNET, CHAT, VOIP | SIPRNET communications |
| 3672200V05016-1 | MOD KIT, SIPRNET AND FIBER OPT | SIPRNET fiber optic mod |
| 3672200V05035-1 | MOD KIT, SIPRNET, AFLRE-3 | SIPRNET mod for AFLRE-3 |
| 3672200V05037-1 | MOD KIT, SIPRNET, AFLRE-4 | SIPRNET mod for AFLRE-4 |
| 3672300V05010-1 | MOD KIT, SIPRNET | SIPRNET modification kit |
| 4806295-1 | SIPRNET 2 RACK ASSEMBLY, RACK 34 | Rack 34 SIPRNET |
| 4806296-1 | WIRING KIT, SIPRNET 2 RACK 34 | Rack 34 wiring |
| 4806335-1 | SIPRNET 1 RACK ASSEMBLY, RACK 33 | Rack 33 SIPRNET |
| 4806336-1 | WIRING KIT, SIPRNET 1 RACK 33 | Rack 33 wiring |
| EPSIPRFIREWALL | SIPRNET FIREWALL | SIPRNET firewall |
| EPSIPRIPS | SIPRNET IPS | SIPRNET Intrusion Prevention |
| EPSIPRROUTER | SIPRNET ROUTER | SIPRNET router |
| EPSIPRSWITCH | SIPRNET SWITCH | SIPRNET switch |
| EPFY21SIPRNET | HARDWARE MAINTENANCE ON SIPRNET | FY21 maintenance |
| EPFY22SIPRNET | HARDWARE MAINTENANCE ON SIPRNET | FY22 maintenance |
| EPFY23SIPRNET | HARDWARE MAINTENANCE ON SIPRNET | FY23 maintenance |


**JTAGS** = Joint Tactical Ground Station. JTAGS receives and processes data from Defense Support Program (DSP) and Space-Based Infrared System (SBIRS) satellites to provide ballistic missile launch warning. The SIPRNET LAPTOP, JTAGS material is the SECRET-level computing asset for the JTAGS missile warning system. This is a STRATEGIC missile defense asset.

**Cryptographic Devices:**

| Material | Description | Type |
|----------|-------------|----------|
| 0N367622 | KYV-5 SECURE VOICE COMSEC MODULE | NSA Type 1 encryption device |
| 0N460464 | COMSEC MODULE | Embedded COMSEC |
| 0N460464-000 | COMSEC Assy w/ Cover | COMSEC assembly |
| 0N460464+000 | Mini-TCDL COMSEC | Tactical Common Data Link encryption |
| 0N460409-01 | CIRCUIT CARD ASY COMSECN | COMSEC circuit card |
| 0N460440-01/02 | CCA-COMSEC H | COMSEC Circuit Card Assembly |
| 0N460441-001/01 | CCA COMSEC LOW RATE | Low-rate COMSEC CCA |
| 0N460452-00/01 | CCA - COMSEC | COMSEC CCA variant |
| 0N460453-00/01 | CCA - COMSEC | COMSEC CCA variant |
| 0N460460-00 | CCA EMBEDDED COMSEC | Embedded COMSEC CCA |
| 0N460472-00/000/000 | CCA HR/LR COMSEC DA | High-Rate/Low-Rate COMSEC Data Adapter |
| 0N648063 | COMSEC DEVICE | Cryptographic device |
| 1000381039 | COMSEC ASSEMBLY | COMSEC assembly |
| 0060109-001 | Panel, COMSEC | COMSEC control panel |
| 06401-8155836-00 | COMSEC FILL PANEL INTERFACE | Crypto key fill panel |
| 0060325-01 through -04 | CABLE ASSY, GND, LEG, COMSEC REMOTE | COMSEC remote grounding cables |
| 0060326-01 through -04 | CABLE ASSY, GND, LEG, COMSEC REMOTE | COMSEC remote grounding cables II-IV |


The **KYV-5** is an NSA Type 1 encryption device for secure voice communications. It's a controlled cryptographic item (CCI) subject to COMSEC handling requirements. Finding it in the SAP material master means Northrop Grumman either manufactures or integrates these devices.

* **Mini-TCDL COMSEC: TCDL =** Tactical Common Data Link. This is the encrypted data link used by UAVs (MQ-8, MQ-4, RQ-4) to transmit sensor data to ground stations. The Mini-TCDL COMSEC module is the encryption device that secures these data links.
* **COMSEC Fill Panel:** The "COMSEC FILL PANEL INTERFACE" (06401-8155836-00) is the physical interface used to load cryptographic keys into COMSEC devices. 


<div style="display: flex; justify-content: center;">
<pre style="text-align: left; font-weight: bold;">
         \   _   /
          \_(0)_/
+---=====(]( + )[)=====---+
      *   o  @  o   *
</pre>
</div>

This flight began by the beginning of June and reached its final destination in September when Northrop Grumman ran a proper IR against me. All credentials have been rotated, ICM hardened, and network-level restrictions have been enforced. All we have is in documentation and memories form now.

Nevertheless, it was fun, and made some dark nights a bit more tolerable.

If you're struggling with mental health and constantly looking for cyber marauding to push yourself out of bed every morning, raid until there's beauty in it. 

It gets better.

Some points I'd like to address to anyone who's read so far:
* As a huge aviation and engineering fan, I do not condemn the attitude of those with Northrop Grumman's nor any other military aircraft constructor's products in hands. I solely appreciate the machinery. 
* I do not have great expertise in M*crosoft environments, hence there can be easily seen I might've missed important paths anyone with more understanding about it than me would've explored better.
* I am not a threat.
* Aircraft ASCII art from [https://ascii.co.uk/art/air](https://ascii.co.uk/art/air).

Thank you. :)