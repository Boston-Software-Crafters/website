[Facilitator Prep](#faciliator-prep)
[Collateral](#collateral)
[Meeting](#meeting)
[Kata Templates](#kata-templates)
  [Sources for Templates](#sources-for-templates)
[Faclitators and IDEs](#faciliators-and-ides)
  [Web IDE Alternatives](#web-ide-alternatives)

<a name="questions-issues"></a>
## Roles
Individual
- Logistics Facilitator - presents info on how session will work
- Kata Presenter
- Email Putter Togetherer - puts together an email for participants

Group
- Kata Room Faclitator - approx 8
- Template Author

#### ***Logistics Facilitator***
Ethan

#### ***Kata Presenter***
Paul R

#### ***Kata Templates***

| Language | Developer| Status||
|---|---|---|---|
| Kotlin|Paul R|Completed| |
| Python| Sam, David(?)|Pending|   |
| Ethan|JavaScript|Pending||

#### ***Facilitators***
| Template Author|Language|IDE|Status|
|---|---|---|---|
| Alex|Javascript|VSCode|
| Eric|Python|   |
| Ethan|JavaScript|VSCode|
| Danil|   |   |
| David|Python|VSCode|
| Paul H|   |   |
| Paul R|Kotlin|IntelliJ|
| Sam|Python|VSCode|

## Proposals
- [ ] If hard to hear particpant, suggest participant uses slack to communicate
- [ ] If participant has bad internet connection, faciliator suggests skipping the participant as a driver
- [ ] Create a Technical Issues channel
- [ ] Identify a technical floater to help all the facilitators and participants if technical issues.
- [ ]

<a name="todos"></a>
## To Dos
- [ ] Is there a better way to track proposals and todos (GitHub issues?)?
- [ ] Schedule trial sessions
- [ ] Zoom features for main presenter and facilitator to explore (not sure if paid or free):
  - [ ] Partipant options: Hand Raise, Yes No, Thumbs Up/Thumbs Down
  - [ ] Two people sharing screen at same time, you can flip back and forth


<a name="facilitator-prep"></a>
## Kata Room Facilitator Prep
- pre-select facilitator.  Facilitators are familiar with TDD, mob programming, and the kata.
- each facilitator
  - selects a language and has the IDE set up and starter code ready to go
  - decides which remote control enabled conference tool  to use (paid zoom and freeconferencecalls.com are top choice)
  - decides whether to be pure facilitator or participate
  - does a trial run

<a name="kata-templates"></a>
## Kata Templates
Paul Reilly is leading the effort and has come up with a great structure.  See https://gitlab.com/boston-software-crafters.  Developer and language are listed in the [To Dos](#todos) section.  Guidelines:
- for generic language templates, create a template with:
  - a test that calls an independent or static function and passes
  - a test that calls an independent or static function and fails
  - a test that creates an instance of a class (for instance, Person class) and tests a class method (for instance, full name = first + last)
  - instructions on how to configure an IDE for a language
- for kata templates for a language, unless the kata has starter code, create a readme that tells the person where to get the generic language template and where to find information about the kata.


<a name="collateral"></a>
## Collateral to be Provided on Meetup and Email
- URL for Zoom meetup (Paul R's Zoom URL)
- Info on freeconcferencecall.com
- Details for joining Slack
- Optional reading material (Paul R, Ethan)
- Tips
  - Space bar to mute / unmute in Zoom

<a name="meeting"></a>
## Meeting
- 5PM
  - Start Zoom meeting (Paul R)
  - Social hour, questions.
  - Facilitators check IDE and conference call ready to go
- 6PM
  - Intro to concepts
  - Kata
  - How to join breakout room, aka conference call
- 6:30
  - facilitators post video URL details in Boston Software Crafters slack
  - participants join
  - mob programming starts, using facilitator's computer
- 8:30 Final retro (for each breakout room)
- 8:40 Wrap up
- 8:45 Virtual after hour party

<a name="sources-for-templates"></a>
### Sources for Templates
- https://github.com/Boston-Software-Crafters/kata-templates.
- https://gitlab.com/swcraftrennes-dojo/tdd-base From organizer:
>At Software Crafters Rennes, we decide to create kata templates like yours  . Base structure for Test-Driven Development katas, in several programming languages.
- https://github.com/swkBerlin/kata-bootstraps Empty projects for different languages with a failing test
- Instructions for installing Kotlin: https://exercism.io/tracks/kotlin/installation

<a name="facilitators-and-ides"></a>
## Facilitators and IDEs
Each facilator can choose the IDE.  See [To Dos](#todos) for facilitator and IDE list.

<a name="web-ide-alternatives"></a>
### ***Web IDE Alternatives***
Facilitators can also choose to use a Web IDE.  Current leaning is to not use Web IDE.
- https://exercism.io/tracks/kotlin/installation  Kotlin installation instructions and exercises designed for beginners.
- https://cyber-dojo.org
- https://repl.it/
- https://colab.research.google.com/
