/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import M from "materialize-css";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import { getDataByCondition } from "../../actions/home.action";

class Home extends Component {
  constructor(props) {
    super(props);
    //Declare and set default values for state
    this.state = {
      search: "",
      method: "undefined",
      from: new Date(),
      to: new Date(),
      checkBox: {
        title: true,
        author: true,
        type: true,
        issuedOn: true,
        publisher: true,
        doi: true,
        rating: true
      },
      filterTitle: {
        checked: false,
        value: "AND",
        text: ""
      },
      filterAuthor: {
        checked: false,
        value: "AND",
        text: ""
      },
      filterPublisher: {
        checked: false,
        value: "AND",
        text: ""
      }
    };
  }

  // Start to render the page

  componentDidMount() {
    M.AutoInit();
  }

  // -------------------------- FUNCTIONS --------------------------

  // Set the value of Title checkbox
  toggleTitleCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        title: !checkBox.title
      }
    });
  };

  // Set the value of Author checkbox
  toggleAuthorCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        author: !checkBox.author
      }
    });
  };

  // Set the value of Type checkbox
  toggleTypeCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        type: !checkBox.type
      }
    });
  };

  // Set the value of Issued On checkbox
  toggleIssuedOnCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        issuedOn: !checkBox.issuedOn
      }
    });
  };

  // Set the value of Publisher checkbox
  togglePublisherCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        publisher: !checkBox.publisher
      }
    });
  };

  // Set the value of DOI checkbox
  toggleDoiCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        doi: !checkBox.doi
      }
    });
  };

  // Set the value of Rating checkbox
  toggleRatingCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        rating: !checkBox.rating
      }
    });
  };

  // Set the value of Search checkbox
  onTextInputSearchChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  // Set the value of Filter Title checkbox
  togglFilterTitleCheckBox = () => {
    const { filterTitle } = this.state;
    this.setState({
      filterTitle: {
        ...filterTitle,
        checked: !filterTitle.checked
      }
    });
  };

  // Set the value of Filter Author checkbox
  togglFilterAuthorCheckBox = () => {
    const { filterAuthor } = this.state;
    this.setState({
      filterAuthor: {
        ...filterAuthor,
        checked: !filterAuthor.checked
      }
    });
  };

  // Set the value of Filter Publisher checkbox
  togglFilterPublisherCheckBox = () => {
    const { filterPublisher } = this.state;
    this.setState({
      filterPublisher: {
        ...filterPublisher,
        checked: !filterPublisher.checked
      }
    });
  };

  // Set the value of Method Filter dropdown
  onDropDownMethodChange = event => {
    this.setState({
      method: event.target.value
    });
  };

  // Change value of 'from' date picker
  onFromChange = date => {
    this.setState({
      from: date
    });
  };

  // Change value of 'to' date picker
  onToChange = date => {
    this.setState({
      to: date
    });
  };

  // Set the value of Title Conditioner dropdown
  onDropDownTitleChange = event => {
    const { filterTitle } = this.state;
    this.setState({
      filterTitle: {
        ...filterTitle,
        value: event.target.value
      }
    });
  };

  // Set the value of Author Conditioner dropdown
  onDropDownAuthorChange = event => {
    const { filterAuthor } = this.state;
    this.setState({
      filterAuthor: {
        ...filterAuthor,
        value: event.target.value
      }
    });
  };

  // Set the value of Title Conditioner dropdown
  onDropDownPublisherChange = event => {
    const { filterPublisher } = this.state;
    this.setState({
      filterPublisher: {
        ...filterPublisher,
        value: event.target.value
      }
    });
  };

  // Change the text input of Title Filter
  onTextInputTitleChange = event => {
    const { filterTitle } = this.state;
    this.setState({
      filterTitle: {
        ...filterTitle,
        text: event.target.value
      }
    });
  };

  // Change the text input of Author Filter
  onTextInputAuthorChange = event => {
    const { filterAuthor } = this.state;
    this.setState({
      filterAuthor: {
        ...filterAuthor,
        text: event.target.value
      }
    });
  };

  // Change the text input of Publisher Filter
  onTextInputPublisherChange = event => {
    const { filterPublisher } = this.state;
    this.setState({
      filterPublisher: {
        ...filterPublisher,
        text: event.target.value
      }
    });
  };

  // -------------------------- FUNCTIONS DATA & FUNCTIONS NETWORKS --------------------------

  onPressButtonSearch = () => {
    const {
      search,
      method,
      from,
      to,
      filterTitle,
      filterAuthor,
      filterPublisher
    } = this.state;
    const condition = {
      search,
      method,
      from,
      to,
      filterTitle,
      filterAuthor,
      filterPublisher
    };
    this.props.getDataByCondition(condition);
  };

  // -------------------------- RENDER TOP SECTIONS --------------------------

  // Row 1: Search Input texfield and Search button
  renderSearchSection() {
    const { search } = this.state;
    return (
      <div className="row" style={{ height: 40, marginTop: 5 }}>
        <div className="col s10">
          <input
            type="text"
            placeholder="Enter keyword to search"
            value={search}
            onChange={e => {
              this.onTextInputSearchChange(e);
            }}
          />
        </div>
        <div className="col s2">
          <button
            className="btn"
            onClick={() => {
              this.onPressButtonSearch();
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }

  // Row 2: 'Select Methodology' dropdown, 'from' & 'to' date pickers, 'Search History'
  renderFromToSection() {
    const { from, to } = this.state;
    return (
      <div className="row" style={{ height: 40, marginTop: 5 }}>
        <div className="col s10">
          <div className="row">
            <div className="col s4" style={{ height: 30 }}>
              <select
                className="browser-default"
                onChange={e => {
                  this.onDropDownMethodChange(e);
                }}
              >
                <option value="undefined">Select Methodology</option>
                <option value="Option01">Option 1</option>
                <option value="Option02">Option 2</option>
                <option value="Option03">Option 3</option>
              </select>
            </div>
            <div className="col s4">
              From:
              <DatePicker
                selected={from}
                onChange={date => this.onFromChange(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="col s4">
              To:
              <DatePicker
                selected={to}
                onChange={date => this.onToChange(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
        </div>
        <div className="col s2">
          <a href="#">Search History</a>
        </div>
      </div>
    );
  }

  // Row 3: Title conditioner, Title input texfield, Title checkbox
  renderConditionTitle() {
    const { filterTitle } = this.state;
    return (
      <div className="row" style={{ height: 40, marginTop: 5 }}>
        <div className="col s12">
          <div className="row">
            <div className="col s2" style={{ height: 30 }}>
              <select
                className="browser-default"
                onChange={e => {
                  this.onDropDownTitleChange(e);
                }}
              >
                <option value="AND">AND</option>
                <option value="OR">OR</option>
                <option value="OR NOT">OR NOT</option>
              </select>
            </div>
            <div className="col s8">
              <input
                type="text"
                placeholder="Filter by Title ... "
                value={filterTitle.text}
                onChange={e => {
                  this.onTextInputTitleChange(e);
                }}
              />
            </div>
            <div className="col s2">
              <p>
                <label>
                  <input
                    type="checkbox"
                    checked={filterTitle.checked}
                    onChange={() => {
                      this.togglFilterTitleCheckBox();
                    }}
                  />
                  <span>Apply this filter</span>
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Row 4: Author conditioner, Author input texfield, Author checkbox
  renderConditionAuthor() {
    const { filterAuthor } = this.state;
    return (
      <div className="row" style={{ height: 40, marginTop: 5 }}>
        <div className="col s12">
          <div className="row">
            <div className="col s2" style={{ height: 30 }}>
              <select
                className="browser-default"
                onChange={e => {
                  this.onDropDownAuthorChange(e);
                }}
              >
                <option value="AND">AND</option>
                <option value="OR">OR</option>
                <option value="OR NOT">OR NOT</option>
              </select>
            </div>
            <div className="col s8">
              <input
                type="text"
                placeholder="Filter by Author ... "
                value={filterAuthor.text}
                onChange={e => {
                  this.onTextInputAuthorChange(e);
                }}
              />
            </div>
            <div className="col s2">
              <p>
                <label>
                  <input
                    type="checkbox"
                    checked={filterAuthor.checked}
                    onChange={() => {
                      this.togglFilterAuthorCheckBox();
                    }}
                  />
                  <span>Apply this filter</span>
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Row 5: Publisher conditioner, Publisher input texfield, Publisher checkbox
  renderConditionPublisher() {
    const { filterPublisher } = this.state;
    return (
      <div className="row" style={{ height: 40, marginTop: 5 }}>
        <div className="col s12">
          <div className="row">
            <div className="col s2" style={{ height: 30 }}>
              <select
                className="browser-default"
                onChange={e => {
                  this.onDropDownPublisherChange(e);
                }}
              >
                <option value="AND">AND</option>
                <option value="OR">OR</option>
                <option value="OR NOT">OR NOT</option>
              </select>
            </div>
            <div className="col s8">
              <input
                type="text"
                placeholder="Filter by Publisher ... "
                value={filterPublisher.text}
                onChange={e => {
                  this.onTextInputPublisherChange(e);
                }}
              />
            </div>
            <div className="col s2">
              <p>
                <label>
                  <input
                    type="checkbox"
                    checked={filterPublisher.checked}
                    onChange={() => {
                      this.togglFilterPublisherCheckBox();
                    }}
                  />
                  <span>Apply this filter</span>
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //This section combines all rows in the search pannel
  renderTopSection() {
    return (
      <div
        className="row"
        style={{
          border: "1px solid #c8c8c8",
          marginTop: 5,
          padding: 10,
          backgroundColor: "#fff"
        }}
      >
        {this.renderSearchSection()}
        {this.renderFromToSection()}
        {this.renderConditionTitle()}
        {this.renderConditionAuthor()}
        {this.renderConditionPublisher()}
      </div>
    );
  }

  // -------------------------- RENDER BOTTOM SECTIONS --------------------------

  // Declare the list of checkboxes to edit the visibility of columns
  renderCheckBox() {
    const { checkBox } = this.state;
    return (
      <div className="row">
        <label className="col">
          <input
            type="checkbox"
            checked={checkBox.title}
            onChange={() => {
              this.toggleTitleCheckBox();
            }}
          />
          <span>Title</span>
        </label>
        <label className="col">
          <input
            type="checkbox"
            checked={checkBox.author}
            onChange={() => {
              this.toggleAuthorCheckBox();
            }}
          />
          <span>Author</span>
        </label>
        <label className="col">
          <input
            type="checkbox"
            checked={checkBox.type}
            onChange={() => {
              this.toggleTypeCheckBox();
            }}
          />
          <span>Type</span>
        </label>
        <label className="col">
          <input
            type="checkbox"
            checked={checkBox.issuedOn}
            onChange={() => {
              this.toggleIssuedOnCheckBox();
            }}
          />
          <span>Issued on</span>
        </label>
        <label className="col">
          <input
            type="checkbox"
            checked={checkBox.publisher}
            onChange={() => {
              this.togglePublisherCheckBox();
            }}
          />
          <span>Publisher</span>
        </label>
        <label className="col">
          <input
            type="checkbox"
            checked={checkBox.doi}
            onChange={() => {
              this.toggleDoiCheckBox();
            }}
          />
          <span>DOI</span>
        </label>
        <label className="col">
          <input
            type="checkbox"
            checked={checkBox.rating}
            onChange={() => {
              this.toggleRatingCheckBox();
            }}
          />
          <span>Rating</span>
        </label>
      </div>
    );
  }

  renderBottomSection() {
    const { checkBox } = this.state;
    const { data } = this.props;

    // Check the conditions of the checkboxes in order to selected columns only
    let columns = [];
    if (checkBox.title) {
      columns = [...columns, { title: "Title", field: "title" }];
    }
    if (checkBox.author) {
      columns = [...columns, { title: "Author", field: "author" }];
    }
    if (checkBox.type) {
      columns = [...columns, { title: "Type", field: "type" }];
    }
    if (checkBox.issuedOn) {
      columns = [...columns, { title: "Issued on", field: "issuedOn" }];
    }
    if (checkBox.publisher) {
      columns = [...columns, { title: "Publisher", field: "publisher" }];
    }
    if (checkBox.doi) {
      columns = [...columns, { title: "DOI", field: "doi" }];
    }
    if (checkBox.rating) {
      columns = [...columns, { title: "Rating", field: "rating" }];
    }

    // Set the initial value of 'search' function
    const option = {
      search: false
    };

    return (
      //List of checkboxes to edit the visibility of columns & result table
      <div
        className="row"
        style={{
          border: "1px solid #c8c8c8",
          marginTop: 10,
          padding: 10,
          backgroundColor: "#fff",
          width: "100%"
        }}
      >
        <div className="col s12">{this.renderCheckBox()}</div>
        <div className="col s12" style={{ width: "100%" }}>
          <MaterialTable
            options={option}
            columns={columns}
            data={data}
            title="Search Result:"
            style={{ boxShadow: "none", borderBottom: 0 }}
          />
        </div>
      </div>
    );
  }

  // This section combines all components to show up on this page: header, body, footer
  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Header title="Home" />
        <div className="container" style={{ width: "90%" }}>
          {this.renderTopSection()}
          {this.renderBottomSection()}
        </div>
        <Footer />
      </div>
    );
  }
}

// Get the relevant fields in that 'state' of redux then pass those values to 'props' via reducer
const mapStateToProps = state => {
  return {
    data: state.homeReducer.data
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      getDataByCondition
    }
  )
)(Home);
