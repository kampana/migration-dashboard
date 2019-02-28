import { readdirSync, statSync } from "fs";

export class FileLookup {
    constructor() {

    }

    getFilesList(
                    path: string, 
                    excludeDirNames : string[]
                    ) : string[] {
        let filelist = [];
        this.walkSync(path, filelist, excludeDirNames);
        return filelist;
    }

    private walkSync(
                        path: string, 
                        filelist: string[], 
                        excludeDirNames : string[]) {
        let files = readdirSync(path);
        filelist = filelist || [];
        files.forEach( (file) => {
            if (!excludeDirNames.includes(file)) {
                const currentPath = path + '/' + file;
                if (statSync(currentPath).isDirectory()) {
                    filelist = this.walkSync(currentPath + '/', filelist, excludeDirNames);
                }
                else {
                    filelist.push(currentPath);
                }
            }
        });
        return filelist;
    };

}
