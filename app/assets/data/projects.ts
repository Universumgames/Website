export interface ProjectInfo{
    name: string;
    detailedDescriptionKey: string;
    imagePath: string;
    link: string;
}

export const projects: ProjectInfo[] = [
    {
        name: "ConfMan",
        detailedDescriptionKey: "projects.confman.detailedDescription",
        imagePath: "/assets/images/projects/confman_preview.png",
        link: "https://confman.universegame.de/"
    },
    {
        name: "Expoll",
        detailedDescriptionKey: "projects.expoll.detailedDescription",
        imagePath: "/assets/images/projects/expoll_preview.png",
        link: "https://expoll.mt32.net"
    },
    {
        name: "eclipseTabs",
        detailedDescriptionKey: "projects.eclipsetabs.detailedDescription",
        imagePath: "/assets/images/projects/eclipsetabs_preview.png",
        link: "https://github.com/Universumgames/eclipseTabs"
    },
    {
        name: "SoundShelf",
        detailedDescriptionKey: "projects.soundshelf.detailedDescription",
        imagePath: "/assets/images/projects/soundshelf_preview.png",
        link: "/soundshelf"
    }
];