// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

const channelcontainer = document.getElementById("channels");

async function getChanel() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();

  console.log(data);

  data.channels.forEach((channel) => {
    const channelName = document.createElement("div");
    const channelName2 = document.createElement("div");
    const channeliMage = document.createElement("img");
    const channelTitle = document.createElement("h2");
    const channelaudio = document.createElement("audio");

    channelName.setAttribute("class", "channel1");
    channelName2.setAttribute("class", "channel2");
    channeliMage.setAttribute("class", "image");

    channeliMage.src = channel.image;
    channelTitle.textContent = channel.name;
    channelaudio.src = channel.liveaudio.url;
    channelaudio.controls = true;
    channelaudio.type = "audio/mpeg";
    channelName2.style.backgroundColor = `#${channel.color}`

    channelName2.appendChild(channelTitle);
    channelName2.appendChild(channelaudio);

    channelName.appendChild(channeliMage);
    channelName.appendChild(channelName2);
    channelcontainer.appendChild(channelName);
  });
}

getChanel();
