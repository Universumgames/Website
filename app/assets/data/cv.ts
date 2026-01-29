
export enum CVSection {
    Languages,
    Programming_Languages,
    Frameworks_and_Libraries,
    Tools_and_Platforms,
    Other_Skills
}

export interface CVSkill {
    name: string;
    level: number; // 1-5
    section: CVSection;
}

const cvSkills: CVSkill[] = [
    // Languages
    { name: "English", level: 4, section: CVSection.Languages },
    { name: "German", level: 5, section: CVSection.Languages },

    // Programming Languages
    { name: "C/C++", level: 5, section: CVSection.Programming_Languages },
    { name: "C#", level: 4, section: CVSection.Programming_Languages },
    { name: "Java", level: 4, section: CVSection.Programming_Languages },
    { name: "Kotlin", level: 3, section: CVSection.Programming_Languages },
    { name: "HTML/CSS", level: 4, section: CVSection.Programming_Languages },
    { name: "JavaScript/TypeScript", level: 4, section: CVSection.Programming_Languages },
    { name: "SQL", level: 3, section: CVSection.Programming_Languages },
    { name: "Swift", level: 2, section: CVSection.Programming_Languages },
    { name: "PHP", level: 1, section: CVSection.Programming_Languages },

    // Frameworks and Libraries
    { name: "Vue.js", level: 4, section: CVSection.Frameworks_and_Libraries },
    { name: "React", level: 3, section: CVSection.Frameworks_and_Libraries },
    { name: "Angular", level: 3, section: CVSection.Frameworks_and_Libraries },

    // Tools and Platforms
    { name: "Git", level: 4, section: CVSection.Tools_and_Platforms },
    { name: "Docker", level: 4, section: CVSection.Tools_and_Platforms },
    { name: "Ansible", level: 2, section: CVSection.Tools_and_Platforms },
    { name: "Linux", level: 4, section: CVSection.Tools_and_Platforms },
    { name: "Windows", level: 5, section: CVSection.Tools_and_Platforms },
    { name: "macOS", level: 3, section: CVSection.Tools_and_Platforms },
    
];

export enum CVProjectType {
    Personal,
    Uni,
    Contribution
}

export interface CVProject {
    name: string;
    descriptionKey: string;
    link?: string;
    type: CVProjectType;
}

const cvProjects: CVProject[] = [
    { name: "eclipseTabs", descriptionKey: "cv.projects.eclipseTabs", link: "https://github.com/Universumgames/eclipseTabs", type: CVProjectType.Personal },
    { name: "ConfMan", descriptionKey: "cv.projects.confman", link: "https://confman.universegame.de/", type: CVProjectType.Personal },
    { name: "Expoll", descriptionKey: "cv.projects.expoll", link: "https://expoll.universegame.de/", type: CVProjectType.Personal },
    { name: "Qube Puzzle", descriptionKey: "cv.projects.qubePuzzle", link: "https://github.com/Universumgames/cube_puzzle", type: CVProjectType.Uni },
    { name: "TIDILE", descriptionKey: "cv.projects.tidile", link: "https://github.com/mt32net/TIDILE", type: CVProjectType.Contribution },
    {name: "MT32", descriptionKey: "cv.projects.mt32", link: "https://mt32.net", type: CVProjectType.Contribution }
];

export { cvSkills, cvProjects };
