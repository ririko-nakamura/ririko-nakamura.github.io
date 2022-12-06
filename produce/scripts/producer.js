import pRecord from "./record.js";

window.addEventListener('load', producerInit);

function producerInit() {
    var data = loadJSON("../produce/profiles" + "/profile.json");
    genPProfile(data.profile);
    genPIdolList(data["produce-idols"]);
    genPRecordList(data["produce-records"]);
}

function genPProfile(profile) {
    const pProfile = document.getElementById("producer-profile");
    const pAffinity = createChildP(pProfile, profile.affinity);
    const pName = createChildP(pProfile, profile.name);
    pName.setAttribute("id", "producer-name");
}

function genPIdolList(idolList) {
    const pIdolList = document.getElementById("produce-idols");
    for (const index in idolList) {
        const idol = idolList[index];
        const idolNode = document.createElement("div");
        idolNode.className = "pIdol";
        idolNode.setAttribute("style", "background-color: " + idol["image-color"]);
        pIdolList.appendChild(idolNode);
        const nameNode = createChildP(idolNode, idol["name"]);
        nameNode.setAttribute("style", "background-color: " + idol["image-color"]);
    }
}

function genPRecordList(recordList) {
    const pRecordList = document.getElementById("produce-records");
    for (const index in recordList) {
        const record = recordList[index];
        pRecordList.appendChild(new pRecord(record).node);
    }
}