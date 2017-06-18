## Team Hoppers Present..

![Alt text](http://www.koehlerdramm.com/wp-content/uploads/2016/04/happy-earth-day-2016-1024x427.jpg)

# recycleHack [![Build](https://travis-ci.org/GroupProjects-hihi2017/TeamHoppers.svg?branch=master)](https://travis-ci.org/GroupProjects-hihi2017/TeamHoppers)

You'll find us online @ http://recyclehack.herokuapp.com/#/

## GETTING STARTED
`git clone https://github.com/GroupProjects-hihi2017/TeamHoppers.git`

`cd TeamHoppers`

`npm install`

`knex migrate:latest`

`knex seed:run`

`npm test`

To start the server, run `npm run dev` and go to http://localhost:3000/

Note about contact form: this requires an API key from Mailgun (https://www.mailgun.com/). Example provided in .env.example file.

## TECHNOLOGIES
* HTML
* CSS
* React
* Redux
* Express
* Knex
* React Router

## UI / WIREFRAMES
### Homepage (with Navbar and Search Box)
add photo
### About
add photo
### General Information
add photo
### Categories
add photo
### Items
add photo
### Organisations
add photo
### Contact
add photo

## DATABASE STRUCTURE
### Database to divide items into categories
Tablename: categories |
--- |
category_id |
category_name |
category_img |
category_info |

### Database of items to donate / recycle
Tablename: itemClass |
--- |
itemClass_id |
category_id (join) |
itemClass_name |
itemClass_info |
itemClass_img |

### Database of organisations to recycle / donate items
Tablename: orgs |
--- |
org_id |
org_name |
org_address |
org_url |
org_img |
org_info |
org_location |

### Database joining organisations with items that they take (and whether the item is to donate or to recyle)
Tablename: joinItemToOrgs |
--- |
orgRelationships_id |
itemClass_id |
org_id |
isDonatable |

## USER STORIES
### Minimum Viable Product (MVP)
* I can search for an item I want to dispose of by item or category.
* The search result will tell me organisations where I can either donate or recyle my item.
* I can also search all items that an organisation will take / collect.
* I want to find general info about recycling, including how to get recycle bags and bins.
* I can submit a donation/recycle location or update to the administrator using a contact form.

### Stretch user stories
* I can be directed to other organizations' websites to learn more about them
* I can find a recycling/donation spot based on my location, or view spots on a map.

## LEARNING OBJECTIVES
### Our team learning objectives include:
* Database planning
* Stakeholder consultation
* Creating a search bar
* Creating a contact forms
* Auto-fill search bar
* Build our confidence and HAVE FUN!

## TEAM ROLES
Role | Name | Responsibility
--- | --- | ---
Product Owner | Sarah | Ensuring the product matches the users stories, ensuring the product has consistency
Scrum Master | Natalie | Holding regular stand ups and checking whether tickets can be moved across
Stakeholder Liaison | Jess | Getting in touch with interested stakeholders and ensuring the final product meets needs of relevant stakeholders
Git Master | ~alternating | Dealing with pull request by making sure its pushed to the right branch and fixing merge conflicts, helping out with git problems
Fun Master | ~alternating | Coming up with enjoyable games, and having comms making sure everyone's all good
