import ContainerBox from "../../ContainerBox/ContainerBox";
import authors from "../../../locales/authors.json"
import {HiOutlineMail} from "react-icons/hi";
import { AiFillGitlab, AiFillGithub } from "react-icons/ai"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import style from "./banners.css"

const AboutMeBanner = () => {


    return(
        <>
            <ContainerBox>
                <h1>{authors.project.name}</h1>
            </ContainerBox>
            <ContainerBox>
                <div id="about">
                    {authors.project.mail !== "" && 
                        <p id="about">
                            <HiOutlineMail onClick={()=> window.open(authors.project.mail)}/>
                        </p>
                    }
                    {authors.project.github !== "" &&
                        <p  id="about">
                            <AiFillGithub onClick={()=> window.open(authors.project.github)} />
                        </p>
                    }
                    {authors.project.gitlab !== "" && 
                        <p id="about">
                            <AiFillGitlab onClick={()=> window.open(authors.project.gitlab)}/>
                        </p>
                    }
                    {authors.project.facebook !== "" && 
                        <p id="about">
                            <FaFacebookF onClick={()=> window.open(authors.project.facebook)}/>
                        </p>
                    }
                    {authors.project.instagram !== "" && 
                        <p id="about">
                            <FaInstagram onClick={()=> window.open(authors.project.instagram)}/>
                        </p>
                    }
                    {authors.project.twitter !== "" && 
                        <p id="about">
                            <FaTwitter onClick={()=> window.open(authors.project.twitter)}/>
                        </p>
                    }
                </div>
            </ContainerBox>
        </>
    );

}

export default AboutMeBanner;