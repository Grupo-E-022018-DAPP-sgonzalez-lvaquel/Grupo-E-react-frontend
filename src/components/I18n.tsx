import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { LocalizeContextProps, LocalizeProvider, withLocalize } from 'react-localize-redux';

import translation, { languages } from 'src/config/translation';


const I18n = withLocalize(
    class extends React.Component<LocalizeContextProps> {
        constructor(props: LocalizeContextProps) {
            super(props);

            this.props.initialize({
                languages,
                options: { renderToStaticMarkup },
            });

            languages.forEach(({code}) => {
                this.props.addTranslationForLanguage(translation[code], code)
            });
        }

        public render() {
            return (
                <React.Fragment>
                    {this.props.children}
                </React.Fragment>
            )
        }
    }
);

export default function({children}: React.Props<any>){
    return (
        <LocalizeProvider>
            <I18n>
                {children}
            </I18n>
        </LocalizeProvider>
    )
}