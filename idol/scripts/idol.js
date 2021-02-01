import {loadJSON} from "../../common/helper.js";
import {liveSkill, supportSkill, passiveSkill} from "skill.js";

class idol {

    constructor(profileName) {
        this.data = loadJSON(profileName);
        this.profile = idolProfile(this.data);
        this.liveSkills = [];
        this.supportSkills = [];

        this.data["live-skill"].forEach(function() {
            this.liveSkills.push(new liveSkill());
        });
    }

    render(index) {
        this.profile.render();
        this.renderLiveSkills();
    }

    renderLiveSkills() {
        const liveSkillList = document.getElementById("live-skills");
        const liveSkill = document.createElement("div");
    }

}
