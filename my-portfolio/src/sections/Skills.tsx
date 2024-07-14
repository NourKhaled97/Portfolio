import { FC } from "react";
import Skill from "../components/Skill";

import React from '../assets/react.png';
import Next from '../assets/next.png';
import CSharp from '../assets/csharp.png';
import NetCore from '../assets/netCore.png';
import Typescript from '../assets/typescript.png';
import Angular from '../assets/angular.png';
import Github from '../assets/github.png';
import SQLServer from '../assets/SQLServer.png';
import MongoDB from '../assets/mongoDB.png';
import Bootstrap from '../assets/bootstrap.jpeg';
import Selenium from '../assets/selenium.png';
import FluentUI from '../assets/fluentUI.png';

import Communication from '../assets/communication.png';
import Teamwork from '../assets/teamwork.png';
import TimeManagment from '../assets/TimeManagment.png';
import CleanCode from '../assets/cleanCode.png';
import ProblemSolving from '../assets/problemSolving.jpeg';
import Adaptability from '../assets/Adaptability.png';
import Attention from '../assets/Adaptability.png';
import Patience from '../assets/patience.png';
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

const styles: Record<string, React.CSSProperties> = {
    soft: {
        paddingLeft: '40px',
    },
};

const technicalSkills = [
    {
        name: "React",
        image: React,
    },
    {
        name: "Next",
        image: Next,
    },
    {
        name: "c#",
        image: CSharp,
    },
    {
        name: ".Net Core",
        image: NetCore,
    },
    {
        name: "Typescript",
        image: Typescript,
    },
    {
        name: "Angular",
        image: Angular,
    },
    {
        name: "Git",
        image: Github,
    },
    {
        name: "SQL Server",
        image: SQLServer,
    },
    {
        name: "MongoDB",
        image: MongoDB,
    },
    {
        name: "Bootstrap",
        image: Bootstrap,
    },
    {
        name: "Selenium",
        image: Selenium,
    },
    {
        name: "Fluent UI",
        image: FluentUI,
    },
];

const softSkills = [
    {
        name: "Communication",
        image: Communication,
    },
    {
        name: "Teamwork & Collaboration",
        image: Teamwork,
    },
    {
        name: "Time Managment",
        image: TimeManagment,
    },
    {
        name: "Clean Code",
        image: CleanCode,
    },
    {
        name: "Problem-Solving",
        image: ProblemSolving,
    },
    {
        name: "Adaptability & Flexibility",
        image: Adaptability,
    },
    {
        name: "Attention to Detail",
        image: Attention,
    },
    {
        name: "Patience & Persistence",
        image: Patience,
    },
];

const Skills: FC = () => {
    const classes = styles;

    return (
        <div className="container">
            <Title text='Skills' />
            <div className="row">

                <div className="col-12 col-lg-6">
                    <SubTitle text='Technical Skills' />
                    <div className="row">
                        {technicalSkills.map((technicalSkill, index) => {
                            return (
                                <div key={index} className="col-6 col-sm-3 mb-4">
                                    <Skill name={technicalSkill.name} image={technicalSkill.image} />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="col-12 col-lg-6 ml-lg-4" style={classes.soft}>
                    <SubTitle text='Soft Skills' />
                    <div className="row">
                        {softSkills.map((softSkill, index) => {
                            return (
                                <div key={index} className="col-6 col-sm-4  mb-4">
                                    <Skill name={softSkill.name} image={softSkill.image} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
