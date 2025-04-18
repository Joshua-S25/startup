export class Profile {
    constructor(username, email, pass)
    {
        this.name = '';
        this.email = '';
        this.pass = '';
        this.score = 0;
        this.auth = false;
    }

    verify(userLibrary)
    {
        // Needs to have logic behind it
        for(let i = 0; i < userLibrary.length; i++)
        {
            if(this.name == userLibrary[i].name)
            {
                return [false, i];
            }
        }

        return [true, null];
        
    }

    create(name, email, pass, userLibrary, score = 0)
    {
        // Set Profile Class and variables / Object
        this.name = name;
        this.email = email;
        this.pass = pass;

        // VERIFY -> Compare local storage "Players" If present, return error message, if false, navigate
        let [isUnique, _] = this.verify(userLibrary);

        // TRUE -> The userLibrary couldn't find a username match with proposed name
        if(isUnique == true)
        {
            this.auth = true;
            let file = {name: name, email: email, pass: pass, score: score, auth: this.auth};
            localStorage.setItem(this.name + ' Profile', JSON.stringify(file));
            localStorage.setItem('Username', this.name);
            return file;
        }
        else
        {
            console.warn(`Sorry, you're username, ${name}, is already taken`);
            return false;
        }
    }

    login(name, email, pass, userLibrary, score = 0)
    {
        // Set Profile Class and variables / Object
        this.name = name;
        this.email = email;
        this.pass = pass;
 
        // VERIFY -> Compare local storage "Players" If present, return error message, if false, navigate
        let [isUnique, matchNum] = this.verify(userLibrary);

        if(matchNum == null || this.email != userLibrary[matchNum].email || this.pass != userLibrary[matchNum].pass)
        {
            isUnique = true;
        }

        // FALSE -> The userLibrary has your username, you can continue
        if(isUnique == false)
        {
            this.auth = true;
            let file = {name: name, email: email, pass: pass, score: score, auth: this.auth};
            localStorage.setItem(this.name + ' Profile', JSON.stringify(file));
            localStorage.setItem('Username', this.name);
            return;
        }
        else
        {
            console.warn(`Sorry, you're account, ${name}, doesn't exist`);
            return ;
        }
    }

    reset()
    {
        this.name = '';
        this.email = '';
        this.pass = '';
        this.score = 0;
        this.auth = false
    }

    delete()
    {
        localStorage.removeItem(this.name + ' Profile');
        localStorage.removeItem(this.name);
    }

    updateScore(points)
    {
        let temp = JSON.parse(localStorage.getItem(this.name + ' Profile'));
        temp.score = points;
        localStorage.setItem(this.name + ' Profile', JSON.stringify(temp));
    }
}
