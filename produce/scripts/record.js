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
            this.info.setAttribute("style", "z-index: 2");


        } else if (record["type"] == "P") {
            this.node.className = "pProduceRecord";
            //this.node.setAttribute("style", "z-index: 0");
            // hover to show participation list (mobile: flip button)
            this.node.onmouseenter = function(){swap()};
            this.node.onmouseout   = function(){swap()};

            // video / book / project main visio
            this.visio.setAttribute("style", "");
            this.visio.setAttribute("style", "z-index: 2; background-color: black");

            // info layer
            this.info.setAttribute("style", "");
            this.visio.setAttribute("style", "z-index: 1; background-color: white");
            

        }

    }

    swap() {
        info_z_index  = this.info.getAttribute("style")["z-index"];
        visio_z_index = this.visio.getAttribute("style")["z-index"];
        this.info.setAttribute("style", "z-index: " + visio_z_index);
        this.visio.setAttribute("style", "z-index: " + info_z_index);
    }

}