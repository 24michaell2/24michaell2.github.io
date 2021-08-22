
function zeldaOffline()
{
    document.getElementById('onlineselection').remove()
    document.getElementById('offlinebutton').remove()
    document.getElementById('onlinebutton').remove()
    document.getElementById("zeldawin").innerHTML += "<button id='bbutton' class='zeldabutton'onclick='takesSkill()'><p class='ptagb'>B</p></button>"
}

function zeldaOnline()
{
    document.getElementById('onlineselection').remove()
    document.getElementById('offlinebutton').remove()
    document.getElementById('onlinebutton').remove()
    document.getElementById("zeldawin").innerHTML += "<button id='bbutton' class='zeldabutton'onclick='win()'><p class='ptagb'>B</p></button>"
}

function takesSkill()
{
    document.getElementById("bbutton").remove()
    document.getElementById("zeldawin").innerHTML += "<p id='zeldawinlose'>Um. You're gonna have to use skill to win</p>"
    document.getElementById("zeldawin").innerHTML += "<button id='retry' class='zeldabutton'onclick='resetZeldaWin()'>Retry</button>"
}

function win()
{
    document.getElementById("bbutton").remove()
    document.getElementById("zeldawin").innerHTML += "<p id='zeldawinlose'>YOU WIN!!</p>"
    document.getElementById("zeldawin").innerHTML += "<button id='retry' class='zeldabutton'onclick='resetZeldaWin()'>Retry</button>"
}

function resetZeldaWin()
{
    document.getElementById('zeldawinlose').remove()
    document.getElementById('zeldawin').innerHTML += '<p id="onlineselection">Please select mode:</p>'
    document.getElementById('zeldawin').innerHTML += '<button id="onlinebutton" class=\'zeldabutton\'onclick="zeldaOnline()">Online</button>'
    document.getElementById('zeldawin').innerHTML +=  '<button id="offlinebutton" class=\'zeldabutton\'onclick="zeldaOffline()">Offline</button>'
    document.getElementById('retry').remove()

}






function minminShield()
{
    document.getElementById('minminsdbutton').remove()
    document.getElementById('minminshieldbutton').remove()
    document.getElementById('minminspotdodgebutton').remove()
    document.getElementById('minminjumpbutton').remove()
    document.getElementById('minminrunbutton').remove()
    document.getElementById('minminCYOA').remove()
    document.getElementById('minmini').innerHTML += "<p id='minminresult'>Min-Min keeps spamming and breaks your shield</p>"
    document.getElementById('minmini').innerHTML += "<button id='resetMinMini' onclick='resetMinMini()'>Retry</button>" 
}

function minminSpotdodge()
{
    document.getElementById('minminsdbutton').remove()
    document.getElementById('minminshieldbutton').remove()
    document.getElementById('minminspotdodgebutton').remove()
    document.getElementById('minminjumpbutton').remove()
    document.getElementById('minminrunbutton').remove()
    document.getElementById('minminCYOA').remove()
    document.getElementById('minmini').innerHTML += "<p id='minminresult'>You dodge the first Forward Smash but Min-Min just throws out another and hits you</p>"
    document.getElementById('minmini').innerHTML += "<button id='resetMinMini' onclick='resetMinMini()'>Retry</button>" 
}

function minminRun()
{
    document.getElementById('minminsdbutton').remove()
    document.getElementById('minminshieldbutton').remove()
    document.getElementById('minminspotdodgebutton').remove()
    document.getElementById('minminjumpbutton').remove()
    document.getElementById('minminrunbutton').remove()
    document.getElementById('minminCYOA').remove()
    document.getElementById('minmini').innerHTML += "<p id='minminresult'>You run straight into Min-Min's Forward Smash</p>"
    document.getElementById('minmini').innerHTML += "<button id='resetMinMini' onclick='resetMinMini()'>Retry</button>" 
}

function minminJump()
{
    document.getElementById('minminsdbutton').remove()
    document.getElementById('minminshieldbutton').remove()
    document.getElementById('minminspotdodgebutton').remove()
    document.getElementById('minminjumpbutton').remove()
    document.getElementById('minminrunbutton').remove()
    document.getElementById('minminCYOA').remove()
    document.getElementById('minmini').innerHTML += "<p id='minminresult'>Min-Min jumps and still hits you with her long ARMS</p>"
    document.getElementById('minmini').innerHTML += "<button id='resetMinMini' onclick='resetMinMini()'>Retry</button>" 
}

function minminSD()
{
    document.getElementById('minminsdbutton').remove()
    document.getElementById('minminshieldbutton').remove()
    document.getElementById('minminspotdodgebutton').remove()
    document.getElementById('minminjumpbutton').remove()
    document.getElementById('minminrunbutton').remove()
    document.getElementById('minminCYOA').remove()
    document.getElementById('minmini').innerHTML += "<p id='minminresult'>Correct! SD-ing ensures that you won't have to sit through the pain of versing a Min-Min</p>"
    document.getElementById('minmini').innerHTML += "<button id='resetMinMini' onclick='resetMinMini()'>Retry</button>" 
}

function resetMinMini()
{
    document.getElementById('minminresult').remove()
    document.getElementById('resetMinMini').remove()
    document.getElementById('minminmario').remove()
    document.getElementById('randombreakinminmini').remove()
    document.getElementById('minmini').innerHTML += '<p id="minminCYOA">Min-Min is using forward smash against you from the other side of the stage, what do you do:</p>'
    document.getElementById('minmini').innerHTML += '<image class="minminbutton"id="minminmario" src="mariostanding.png"></image>'
    document.getElementById('minmini').innerHTML += '<br id="randombreakinminmini">'
    document.getElementById('minmini').innerHTML += '<button id="minminshieldbutton" onclick="minminShield()" onmouseover="minminshieldhover(minminmario)" onmouseout="minminunhover(minminmario)">Shield</button>'
    document.getElementById('minmini').innerHTML += '<button id="minminspotdodgebutton" onclick="minminSpotdodge()"onmouseover="minminspotdodgehover(minminmario)" onmouseout="minminunhover(minminmario)">Spotdodge</button>'
    document.getElementById('minmini').innerHTML += '<button id="minminrunbutton" onclick="minminRun()" onmouseover="minminrunhover(minminmario)" onmouseout="minminunhover(minminmario)">Run up to approach</button>'
    document.getElementById('minmini').innerHTML += '<button id="minminjumpbutton" onclick="minminJump()"onmouseover="minminjumphover(minminmario)" onmouseout="minminunhover(minminmario)">Jump to approach</button>'
    document.getElementById('minmini').innerHTML += '<image id="minminsdbutton" onclick="minminSD()" src="minminsd.jpg"></image>'
}


function gwProjectile()
{
    document.getElementById('gwCYOA').remove()
    document.getElementById('gwprojectile').remove()
    document.getElementById('gwground').remove()
    document.getElementById('gwair').remove()
    document.getElementById('gwsmart').remove()
    document.getElementById('gwmini').innerHTML += '<p id="gwresult">The Game and Watch buckets the projectile and later kills you at 10% with it.</p>'
    document.getElementById('gwmini').innerHTML += '<button id="gwreset" onclick="gwreset()">Retry</button>'
}

function gwreset()
{
    document.getElementById('gwresult').remove()
    document.getElementById('gwreset').remove()
    document.getElementById('gwmini').innerHTML += '<p id="gwCYOA">How do you approach a Game and Watch spamming down smash:</p>'
    document.getElementById('gwmini').innerHTML += '<button id="gwprojectile" onclick="gwProjectile()">Throw a Projectile</button>'
    document.getElementById('gwmini').innerHTML += '<button id="gwground" onclick="gwGround()">From the ground</button>'
    document.getElementById('gwmini').innerHTML += '<button id="gwair" onclick="gwAir()">Aerially</button>'
    document.getElementById('gwmini').innerHTML += '<button id="gwsmart" onclick="gwSmart()">Run up Shield, Then Punish out of shield</button>'
}

function gwGround()
{
    document.getElementById('gwCYOA').remove()
    document.getElementById('gwprojectile').remove()
    document.getElementById('gwground').remove()
    document.getElementById('gwair').remove()
    document.getElementById('gwsmart').remove()
    document.getElementById('gwmini').innerHTML += '<p id="gwresult">The Game and Watch easily hits you, burys you, and forward smashes you.</p>'
    document.getElementById('gwmini').innerHTML += '<button id="gwreset" onclick="gwreset()">Retry</button>'
}

function gwAir()
{
    document.getElementById('gwCYOA').remove()
    document.getElementById('gwprojectile').remove()
    document.getElementById('gwground').remove()
    document.getElementById('gwair').remove()
    document.getElementById('gwsmart').remove()
    document.getElementById('gwmini').innerHTML += '<p id="gwresult">The Game and Watch uses up b and back air\'s you, knocking you back to where you were.</p>'
    document.getElementById('gwmini').innerHTML += '<button id="gwreset" onclick="gwreset()">Retry</button>'
}

function gwSmart()
{
    document.getElementById('gwCYOA').remove()
    document.getElementById('gwprojectile').remove()
    document.getElementById('gwground').remove()
    document.getElementById('gwair').remove()
    document.getElementById('gwsmart').remove()
    document.getElementById('gwmini').innerHTML += '<p id="gwresult">This is the best option. However, because you are playing an online match, the lag makes you mess up the shield timing and you get buried. But even if you shield correctly, if you punish on their shield, they\'re up B-ing and punishing you for it. Not great chances for you.</p>'
    document.getElementById('gwmini').innerHTML += '<button id="gwreset" onclick="gwreset()">Retry</button>'
}

function plantNormal()
{
    document.getElementById('plantCYOA').remove()
    document.getElementById('plantnormal').remove()
    document.getElementById('plantattack').remove()
    document.getElementById('plantjump').remove()
    document.getElementById('plantroll').remove()
    document.getElementById('plantletgo').remove()
    document.getElementById('plantstay').remove()
    document.getElementById('plantmini').innerHTML += '<p id="plantresult">The Plant quickly swallows the ptooie and goes side B jab. If you shielded, it\'s getting broken and if you didn\'t, you\'re taking ~75%.</p>'
    document.getElementById('plantmini').innerHTML += '<button id="plantreset" onclick="plantreset()">Retry</button>'
}

function plantreset()
{
    document.getElementById('plantresult').remove()
    document.getElementById('plantreset').remove()
    document.getElementById('plantmini').innerHTML += '<p id="plantCYOA">Quick! You\'re grabbing the ledge and your opponent, a Piranha Plant, starts holding a Ptooie next to ledge, how do you get off ledge:</p>'
    document.getElementById('plantmini').innerHTML += '<button id="plantnormal" onclick="plantNormal()">Normal Get-Up</button>'
    document.getElementById('plantmini').innerHTML += '<button id="plantattack" onclick="plantAttack()">Attack Get-Up</button>'
    document.getElementById('plantmini').innerHTML += '<button id="plantjump" onclick="plantJump()">Jump Get-Up</button>'
    document.getElementById('plantmini').innerHTML += '<button id="plantroll" onclick="plantRoll()">Roll Get-Up</button>'
    document.getElementById('plantmini').innerHTML += '<button id="plantletgo" onclick="plantLetGo()">Let Go of Ledge and Jump Back</button>'
    document.getElementById('plantmini').innerHTML += '<button id="plantstay" onclick="plantStay()">Stay on Ledge</button>'
}

function plantAttack()
{
    document.getElementById('plantCYOA').remove()
    document.getElementById('plantnormal').remove()
    document.getElementById('plantattack').remove()
    document.getElementById('plantjump').remove()
    document.getElementById('plantroll').remove()
    document.getElementById('plantletgo').remove()
    document.getElementById('plantstay').remove()
    document.getElementById('plantmini').innerHTML += '<p id="plantresult">You hit the Plant and the Ptooie falls on you.</p>'
    document.getElementById('plantmini').innerHTML += '<button id="plantreset" onclick="plantreset()">Retry</button>'
}

function plantJump()
{
    document.getElementById('plantCYOA').remove()
    document.getElementById('plantnormal').remove()
    document.getElementById('plantattack').remove()
    document.getElementById('plantjump').remove()
    document.getElementById('plantroll').remove()
    document.getElementById('plantletgo').remove()
    document.getElementById('plantstay').remove()
    document.getElementById('plantmini').innerHTML += '<p id="plantresult">You jump straight into the Ptooie</p>'
    document.getElementById('plantmini').innerHTML += '<button id="plantreset" onclick="plantreset()">Retry</button>'
}

function plantRoll()
{
    document.getElementById('plantCYOA').remove()
    document.getElementById('plantnormal').remove()
    document.getElementById('plantattack').remove()
    document.getElementById('plantjump').remove()
    document.getElementById('plantroll').remove()
    document.getElementById('plantletgo').remove()
    document.getElementById('plantstay').remove()
    document.getElementById('plantmini').innerHTML += '<p id="plantresult">The Plant aims the Ptooie towards you and hits you during your endlag</p>'
    document.getElementById('plantmini').innerHTML += '<button id="plantreset" onclick="plantreset()">Retry</button>'
}

function plantLetGo()
{
    document.getElementById('plantCYOA').remove()
    document.getElementById('plantnormal').remove()
    document.getElementById('plantattack').remove()
    document.getElementById('plantjump').remove()
    document.getElementById('plantroll').remove()
    document.getElementById('plantletgo').remove()
    document.getElementById('plantstay').remove()
    document.getElementById('plantmini').innerHTML += '<p id="plantresult">As yor try to jump back on, the Plant aims the Ptooie at you and hits you, most likely killing you if you\'re at high percents</p>'
    document.getElementById('plantmini').innerHTML += '<button id="plantreset" onclick="plantreset()">Retry</button>'
}

function plantStay()
{
    document.getElementById('plantCYOA').remove()
    document.getElementById('plantnormal').remove()
    document.getElementById('plantattack').remove()
    document.getElementById('plantjump').remove()
    document.getElementById('plantroll').remove()
    document.getElementById('plantletgo').remove()
    document.getElementById('plantstay').remove()
    document.getElementById('plantmini').innerHTML += '<p id="plantresult">The Plant continues to hold the Ptooie and you are forced to do one of the other get-ups. If you decide to stay, you will eventually fall off and you will lose your ledge invincibility and the Plant is ready to down tilt you.</p>'
    document.getElementById('plantmini').innerHTML += '<button id="plantreset" onclick="plantreset()">Retry</button>'
}

function minminshieldhover(element)
{
    element.setAttribute('src', 'marioshielding.png');
}

function minminspotdodgehover(element)
{
    element.setAttribute('src', 'mariospotdodge.png');
}

function minminrunhover(element)
{
    element.setAttribute('src', 'mariorunning.png');
}

function minminjumphover(element)
{
    element.setAttribute('src', 'mariojump.png');
}

function minminunhover(element)
{
    element.setAttribute('src', 'mariostanding.png')
}

function gwProjectileHover(element)
{
    element.setAttribute('src', 'mariofireball.png')
}

function gwGroundHover(element)
{
    element.setAttribute('src', 'mariorunning.png')
}

function gwAirHover(element)
{
    element.setAttribute('src','mariojump.png')
}

function gwSmartHover(element)
{
    element.setAttribute('src', 'marioshielding.png')
}

function gwunhover(element)
{
    element.setAttribute('src', 'mariostanding.png')
}