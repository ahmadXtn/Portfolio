import {library, dom} from "@fortawesome/fontawesome-svg-core";
import {faFacebook,faAlgolia} from "@fortawesome/free-brands-svg-icons";
import {faFan} from "@fortawesome/free-solid-svg-icons"
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = true;
config.keepOriginalSource=true;
//config.autoReplaceSvg = "nest";
library.add(faFacebook,faAlgolia,faFan);
dom.watch();