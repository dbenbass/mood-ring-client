<b>mood-ring Client</b>

_______


<b>mood-ring is an app that allows users to assess the average mood of a group of people.</b>

See the back end repository <a href="https://github.com/dbenbass/mood-ring"> here</a>.

Here are the links to the <a href="https://dbenbass.github.io/mood-ring-client"> deployed front end</a>, and the <a href="https://rocky-bastion-73525.herokuapp.com/"> deployed back end </a>

_______

<b>The gist</b>

1. A user logs in.
2. The user creates a mood-ring.
3. The user then adds their mood on a numerical scale of 1-10 (1 being ultimate bad mood, 10 being filled with uncontrollable glee.)
4. They can then tell their friends, colleagues, strangers at a store in the mall, etc to visit the app and enter the id for that user's mood-ring.
5. They all add their moods to the ring, and a numerical average is pumped out.
6. Whoever created the ring can change it's name or delete it.
7. Anyone can see a list of all of the mood-rings created, or one specific ring.
8. The user can log out and change their password.
_______

<b>Some Thoughts / Planning</b>

I thought it would be interesting to create an app that focused on the general "vibe" of a group of people. I was curious to see how behavior would change knowing that the mood of a group was low.
Would people alter their behavior in order to raise the mood of the ring that they were part of? If the general mood of the ring was high, would people be encouraged to help each other stay there?

I imagined it as an interesting thing for a teacher to do before teaching a class, something to use before staff meetings, or as a funny way for friends to commiserate or check in with each other over long distances. There are lots of mood tracker apps, but none that focus on a collective mood that exists during a specific time frame.

I also was excited about experimenting with the humor present in using a precise looking number with tons of decimal points being used to represent something as amorphous and abstract as a mood.

I knew that it would be a challenge to create the back end for this project. I needed to plan my ERD in a way that users could create many mood-rings, be a member of many mood-rings, have different moods in each ring, but only be able to submit one mood per group. With a huge amount of help and research, the resource relationships of the project became more clear. Building the backend of the project was definitely a huge challenge, but it was exciting to see how much functionality can be created in Rails, and I loved seeing how the front end came together with that foundation.

Once I had my backend (relatively) solidified, I ran into many issues regarding update and delete functionality. I circumvented this issue by adding an "owner" column to my groups table. This way, the owner of the group does not have to be logged in to the group they are trying to modify or delete. Navigating through these issues was highly confusing, but now I want to do more of it.

_______

<b>Future Goals</b>

1. I'd love to have a way for someone who creates a mood-ring to send a mood-ring invitation for a specific ring. I feel like entering the group ID is a little bit clunky.
2. Really excited about doing more styling on this. I want to make the color gradient of the mood-ring banner responsive to the average mood of the ring.
3. I like the idea of a user only being able to submit one mood per group, because then the ring represents a finite moment in time, but am considering the idea of letting a user submit a new mood after an hour, or something like that.
4. Maybe it can be an app one day.

_______

<b>Technologies used</b>

<b>Front end</b> - HTML, SCSS, Javascript, jQuery
<b>Back end</b> - Ruby, Ruby on Rails

_______

<b>Wireframes</b>
<img src="/public/wireframes.jpg">
