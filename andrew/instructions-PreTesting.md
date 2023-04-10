
Steps to sync midi controller to the Logic X scripter Plugin Parameters

-------------------------------------------------------------------------------------------------------------

Preliminary - You must have a midi track with some midi information on it, and a plugin on the channel. 
Have a midi controller (or similar device) hooked up to the computer

-------------------------------------------------------------------------------------------------------------

Below are intructions to map a midi controller to the scripter parameters.

* Begin with users watching tester demonstrate the steps.

* Step 1 - Open a scripter plugin on a midi track with information (under midi fx plugin dropdown)

* Step 2 - Select the preset 'MIDI to plugin parameters'.

* Step 3 - Select 'modulation wheel' for Input Type. (this can be set to whatever you like, but modulation wheel is
an intuitive place to start).

* Step 4 - Set Target 1 to 'Learn Plugin Parameter'.

* Step 5 - Open Channel strip plugin effect and touch and alter your choice parameter on the channel strip plugin.

* Step 6 - Click "Learn Midi Input" and select (adjust setting) control knob (or key) on your midi controller which you desire to control the effect.

* Step 7 - Test if patching worked, and play around with effect. Repeat Step 4 - 6 with Target 2, and repeat as desired (Target 3, 4 etc..)

* Step 8 (Optional/NextSteps) - Analyze and edit javascript code. See "Code Examples".



![demoStepsScreenshot](https://user-images.githubusercontent.com/103617658/226141157-8716ce39-705d-479a-9375-9742abe85662.jpg)


-------------------------------------------------------------------------------------------------------------
