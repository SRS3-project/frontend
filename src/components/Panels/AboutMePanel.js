import { Columns } from "react-bulma-components";
import us from "../../locales/authors.json"
import {HiOutlineMail} from "react-icons/hi";
import { AiFillGitlab, AiFillGithub } from "react-icons/ai"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"
import styles from "./items.panels.css";

const AUTHORS = us.authors;

const AboutMePanel = () => {

    return(
        <Columns multiline centered>
            {AUTHORS.map((author) => (
                <Columns.Column size={3} key={author.id}>
                    <h1>{author.name}</h1>
                    <p id="authors">
                        {author.mail != "" && 
                            <HiOutlineMail onClick={()=> window.open(author.mail)}/>}
                        {author.github !== "" && 
                            <AiFillGithub onClick={()=> window.open(author.github)}/>}
                        {author.gitlab !== "" && 
                            <AiFillGitlab onClick={()=> window.open(author.gitlab)}/>}
                        {author.facebook !== "" && 
                            <FaFacebookF onClick={()=> window.open(author.facebook)}/>}
                        {author.instagram !== "" && 
                            <FaInstagram onClick={()=> window.open(author.instagram)}/>}
                        {author.twitter !== "" && 
                            <FaTwitter onClick={()=> window.open(author.twitter)}/>}
                        {author.website !== "" && 
                            <CgWebsite onClick={()=> window.open(author.website)}/>}
                        
                    </p>
                </Columns.Column>
            ))}

        </Columns>
    );

}

export default AboutMePanel;