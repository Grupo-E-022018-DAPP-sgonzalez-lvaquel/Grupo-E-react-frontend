import * as React from 'react';
import { Language, LocalizeContextProps, withLocalize } from 'react-localize-redux';

export default withLocalize((props: LocalizeContextProps) =>
    <div className="dropleft">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-globe" />
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {props.languages.map(language => <LanguageMenuItem key={language.code} setActiveLanguage={props.setActiveLanguage} language={language} />)}
        </div>
    </div>
);

interface ILanguageMenuItemProps extends React.Props<any> {
    language: Language
    setActiveLanguage: (languageCode: string) => void;
}

function LanguageMenuItem({ language, setActiveLanguage }: ILanguageMenuItemProps) {
    const clickHanlder = () => {
        setActiveLanguage(language.code)
    }

    const classes = `dropdown-item ${language.active ? 'active' : ''}`

    return (
        <button onClick={clickHanlder} className={classes} type="button">
            {language.name}
        </button>
    );
}