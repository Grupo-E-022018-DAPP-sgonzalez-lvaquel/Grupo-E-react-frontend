import { DateTime } from 'luxon';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import IAuction from 'src/model/IAuction';
import IAuctionOptions from 'src/model/IAuctionOptions';
import { createAuction } from 'src/store/actions/auctions';

interface IAuctionFormProps extends React.Props<any> {
    createAuction: any;
}

interface IAuctionFormState extends IAuctionOptions {
    id?: number;
    done: boolean;
}

class AuctionForm extends React.Component<IAuctionFormProps, IAuctionFormState> {

    constructor(props: IAuctionFormProps) {
        super(props);

        this.state = {
            description: '',
            done: false,
            dueDate: new Date(Date.now()),
            imageUrl: '',
            price: 0,
            title: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.stopPropagation();
        const { description, dueDate, imageUrl, price, title } = this.state;
        this.props.createAuction({
            description,
            dueDate,
            imageUrl,
            price,
            title
        }).then((auction: IAuction) => this.setState({ done: true, id: auction.id }));
    }

    public handleChange(event: any) {
        this.setState({ [event.target.id]: parseValue(event) } as any);
    }

    public render() {
        return (
            <React.Fragment>
                {this.state.done && <Redirect to={`/auctions/${this.state.id}`} />}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Auction Title</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="title" aria-describedby="titleHelp" placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Product description</label>
                        <textarea onChange={this.handleChange} className="form-control" id="description" placeholder="Product description..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Product Image</label>
                        <input onChange={this.handleChange} type="url" className="form-control" id="imageUrl" placeholder="Enter image URL" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Auction Initial Price</label>
                        <input onChange={this.handleChange} type="number" className="form-control" id="price" placeholder="Enter a price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDate">Auction Due Date</label>
                        <input onChange={this.handleChange} type="datetime-local" className="form-control" id="dueDate" placeholder="Enter an expiration date" />
                    </div>
                    <button type="submit" className="btn btn-primary">Publish</button>
                </form>
            </React.Fragment>
        );
    }
}

function parseValue({ target: { type, value } }: any) {
    return parser(type)(value);
}

function parser(type: string) {
    switch (type) {
        case 'date': return dateParser;
        case 'datetime': return dateParser;
        case 'datetime-local': return dateParser;
        case 'number': return parseInt;
        default: return stringParser
    }
}

function dateParser(date: string) {
    return DateTime.fromISO(date).toJSDate();
}

function stringParser(str: string) {
    return str;
}

export default connect(undefined, { createAuction })(AuctionForm);
