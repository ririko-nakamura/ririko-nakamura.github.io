export default class pMeshi {

    constructor(record) {

        this.node = document.createElement("div");
        this.node.className = "pMeshi";

        this.front = document.createElement("div");
        this.front_img = document.createElement("img");
        this.front_img.src = record["image"];
        this.front_img.alt = record["title"];
        this.front_img.className = "content";
        this.front.appendChild(this.front_img);
        this.node.appendChild(this.front);
        this.front.className = "content";
        this.front.setAttribute("style", "z-index: 2");

        this.back  = document.createElement("div");
        this.back_img = document.createElement("img");
        this.back_img.src = record["back_image"];
        this.back_img.alt = record["title"] + "-back";
        this.back_img.className = "content";
        this.back.appendChild(this.back_img);
        this.node.appendChild(this.back);
        this.back.className  = "content";
        this.back.setAttribute("style", "z-index: 1");

        var self = this
        this.node.onclick = function(){self.swap()};

    }

    swap() {
        var back_z_index   = this.back.style.zIndex;
        var front_z_index  = this.front.style.zIndex;
        this.back.style.zIndex  = front_z_index;
        this.front.style.zIndex = back_z_index;
    }

}