class skill {

    constructor(obj) {
        this.name = obj.name
        this.name_jp = obj.name_jp
    }

    render() {
        // draw item box
    }

}

class liveSkill extends skill {

    constructor() {
        this.

    }

    render() {
        
        this.element = skill.render();
        var skillIcon = document.createElement("image");
        this.element.appendChild(skillIcon);
        var skillName = document.createElement("label");
        if (language == "zh_CN")
            skillName.innerText = this.name;
        else if (language == "ja_JP")
            skillName.innerText = this.name_jp;

    }

}

class supportSkill extends skill {

    constructor() {
        
    }

}

class passiveSkill extends skill {

    constructor() {
        
    }

}