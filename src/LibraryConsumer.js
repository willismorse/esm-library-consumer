import {ParentClass, StringUtils} from "esm-library/bundle.esm";


class LibraryConsumer {

    constructor() {
        let parent = new ParentClass();
        let child = parent.child;
        let stringUtils = new StringUtils();
        
    }
}

let run = new LibraryConsumer();