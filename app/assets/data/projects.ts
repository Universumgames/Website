export interface ProjectInfo{
    name: string;
    detailedDescriptionKey: string;
    imagePath: string;
    link: string;
}

export const projects: ProjectInfo[] = [
    {
        name: "Expoll",
        detailedDescriptionKey: "projects.expoll.detailedDescription",
        imagePath: "/images/projects/expoll1024.png",
        link: "https://expoll.mt32.net"
    },
    {
        name: "SoundShelf",
        detailedDescriptionKey: "projects.soundshelf.detailedDescription",
        imagePath: "/images/projects/soundshelf1024.png",
        link: "/soundshelf"
    },
    {
        name: "ConfMan",
        detailedDescriptionKey: "projects.confman.detailedDescription",
        imagePath: "/images/projects/confman1024.png",
        link: "https://confman.universegame.de/"
    },
    {
        name: "Qube Puzzle",
        detailedDescriptionKey: "projects.qubepuzzle.detailedDescription",
        imagePath: "/images/projects/qube1024.png",
        link: "https://github.com/Universumgames/cube_puzzle"
    },
    {
        name: "eclipseTabs",
        detailedDescriptionKey: "projects.eclipsetabs.detailedDescription",
        imagePath: "/images/projects/eclipse126.png",
        link: "https://github.com/Universumgames/eclipseTabs"
    }

    // TODO tidile
    
];