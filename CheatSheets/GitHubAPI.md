# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate?

Yes. This protects information from users who are not approved to see it. 

> What can I do with an unauthenticated request?

You can test login processes.

> What _can't_ I do with an unauthenticated request?

You can't access specific user data.

> How can I authenticate my request?

1. First way -- with some description of what that is
```
$ curl -u "username" https://api.github.com
```
This authorizes you by using a specific account to pull data from. This of course still requires the account's approval.

2. Second way -- and more descriptive text
```
$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```
This gives a developer access to an account's private information without requiring a password. This is perferred over the basic authorization because the user can revoke access at any given point. 

3. Third way -- yep, include a short description
```
$ curl 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'
```
Used for server to server interactions. Be wary of leaking client info. 


## [Users](https://developer.github.com/v3/users/)

    > How do I ask the API for the profile information for a specific user?
    ```
    GET /users/:username
    ```
    > The profile information for a specific user?
    ```
    GET /user
    ```
    > The repository listing for a specific user?
    
    Ask nicely.
    
    > The recent, public activity for a specific user?
    ```
    https://api.github.com/users/octocat/events/public
    ```

> Is there a limit to the number of requests I can make?
    For authenticated requests, no more than 5.000 an hour! For unauthenticated requests, 60 an hour!
    
    > Is there a way of extending that limit?
    Use your client's ID and secret, BUT only for Server to Server calls.
    
    > What happens when I hit the limit?
    You get an error message.

> What if there is a lot of data returned?
    You can limit it by setting the parameters to the type of data you need.
    
    > How can I ask for more (or less) data from a request?
    Adjust parameters.
    
    > How do I know that there is more data available?
    It should tell you that your data has been compressed....
    
> What are the endpoints for fetching...
    > the profile data for a user?
    > the organizations a user belongs to?
    > the repositories a user has created?
    > a filtered list of repositories?
    > a sorted list of repositories?
    > public events for a user?
> When fetching public events for a user...
    > How many results are returned by default?
    > What limitations exist on fetching more results?
    > What is the basic structure of the results?
    > What fields are included in each result?
    > What are the data types for each field?
    > What are some of the different values for the type field?
