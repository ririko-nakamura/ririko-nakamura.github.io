export default class pRecord {

    constructor(record) {

        this.node = document.createElement("div");
        this.visio = document.createElement("div");
        this.node.appendChild(this.visio);
        this.visio.className = "content";
        this.info  = document.createElement("div");
        this.node.appendChild(this.info);
        this.info.className  = "content";

        if (record["type"] == "IGA") {
            this.node.className = "pInGameProduceRecord";
            //this.node.setAttribute("style", "z-index: 0");

            // main visio
            this.visio.setAttribute("style", "");
            this.visio.setAttribute("style", "z-index: 1; background-color: black");

            // info layer
            this.info.setAttribute("style", "z-index: 2; background-color: white");


        } else if (record["type"] == "P") {
            this.node.className = "pProduceRecord";
            
            // hover to show participation list (mobile: flip button)
            var self = this
            this.node.onmouseenter = function(){self.swap()};
            this.node.onmouseleave = function(){self.swap()};

            // video / book / project main visio
            this.visio.setAttribute("style", "");
            this.visio.setAttribute("style", "z-index: 2; background-color: black");

            // info layer
            this.info.setAttribute("style", "");
            this.info.setAttribute("style", "z-index: 1; background-color: white");

        }

    }

    swap() {
        var info_z_index   = this.info.style.zIndex;
        var visio_z_index  = this.visio.style.zIndex;
        this.info.style.zIndex  = visio_z_index;
        this.visio.style.zIndex = info_z_index;
    }

}