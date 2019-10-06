/*
condition.filterAuthor
condition.filterTitle
condition.filterPublisher
The above three ^^^^^ have .text, .value and .checked properties
.text is the textfield, 
.value is the AND/OR operator
.checked is if toggled
condition.method
condition.search

*/
// -------------------------- GET DATA --------------------------
export const getDataByCondition = condition => dispatch => {
  console.log(condition);

  const data = [
    {
      title: "Heroic algorithms",
      author: "Benedict Kilimanjarosnack",
      type: "DEF Article",
      publisher: "Saitama publishers",
      doi: "148696859",
      issuedOn: "29/09/2013",
      location: "San Jose",
      methodology: "Xtreme Programming",
      status: "approved",
      rating: "1.1"
    },
    {
      title: "Data exchange interruptions",
      author: "Tuan Bui",
      type: "ABC Journal",
      publisher: "IEEE",
      doi: "23232343",
      issuedOn: "18/08/2013",
      location: "Washington",
      methodology: "TDD",
      status: "approved",
      rating: "2.1"
    },
    {
      title: "An in-depth look at the DoD",
      author: "John Wayne",
      type: "DEF Journal",
      publisher: "Penguin Books",
      doi: "24596875",
      issuedOn: "29/02/2013",
      location: "Oklahoma",
      methodology: "Scrum",
      status: "approved",
      rating: "3.5"
    },
    {
      title: "Waterfall Vs Coffee Lake",
      author: "Bill Fences",
      type: "ABC Article",
      publisher: "Toyota RND",
      doi: "98754859",
      issuedOn: "8/05/2013",
      location: "Russia",
      methodology: "Kanban",
      status: "approved",
      rating: "2.8"
    }
  ];

  if(condition.filterAuthor.checked || condition.filterAuthor.checked || condition.filterTitle.checked)
  {
    const newData = data.filter(queryBuilder(condition));
    console.log(newData);
    getDataSuccess(dispatch, newData);
  }
  else
  {
    getDataSuccess(dispatch, data);
  }
};

function queryBuilder(condition)
{
  var authIsChecked = condition.filterAuthor.checked;
  var pubIsChecked = condition.filterPublisher.checked;
  var titIsChecked = condition.filterTitle.checked;
  //Variables to hold results from each query - used to simplify return value
  var authQuery;
  var titQuery;
  var pubQuery;

  //This function applies to each element of the json array
  return function(x)
  {
    if(authIsChecked)
    {
      console.log("Filter author is checked")
      authQuery = x.author.toLowerCase().includes(condition.filterAuthor.text.toLowerCase());
    }
    if(titIsChecked)
    {
      console.log("Filter Title is checked")
      titQuery = x.title.toLowerCase().includes(condition.filterTitle.text.toLowerCase());
    }
    if(pubIsChecked)
    {
      console.log("Filter publisher is checked")
      pubQuery = x.publisher.toLowerCase().includes(condition.filterPublisher.text.toLowerCase());
    }

    if(authIsChecked && titIsChecked && pubIsChecked) // if all 3 are checked
    {
      return authQuery && titQuery && pubQuery;
    }
    else if (authIsChecked && titIsChecked && !pubIsChecked) //if author and title is checked
    {
      return authQuery && titQuery;
    }
    else if( authIsChecked && !titIsChecked && pubIsChecked) // if author and publisher is checked
    {
      return authQuery && pubQuery;
    }
    else if(!authIsChecked && titIsChecked && pubIsChecked) // if publisher and title is checked
    {
      return pubQuery && titQuery;
    }
    else if (authIsChecked && !titIsChecked && !pubIsChecked) //if author is checked
    {
      return authQuery;
    }
    else if( !authIsChecked && titIsChecked && !pubIsChecked) // if title is checked
    {
      return titQuery;
    }
    else if(!authIsChecked && !titIsChecked && pubIsChecked) // if publisher is checked
    {
      return pubQuery;
    }
    //Needs work to change return value depending on what is checked
    return null;
  }
}

const getDataSuccess = (dispatch, data) => {
  dispatch({
    type: "home_data_success",
    data
  });
};
