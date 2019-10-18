export class Project {
    constructor (
        public name? : string,
        public description? : string,
        public author_id? : string,
        public creation_date? : number,
        public start_date? : number,
        public finish_date? : number,
        public deadline? : number,
        public status? : string,
        public users? : {
            user_id? : string,
            job? : string,
            role? : string
        },
        public is_private? : boolean,
        public attachements? : [
            {
                path? : string
            },
            {
                name? : string
            },
            {
                description? : string
            }
        ],
        public comments? : [
            {
                author_id? : string
            },
            {
                comment? : string
            },
            {
                date? : number
            }
        ],
        public git? : string,
        public ressources? : [
            {
                name? : string
            },
            {
                description? : string
            },
            {
                url? : string
            },
            {
                author? : string
            },
            {
                date? : number
            },
        ],
        public tasks? : [
            {
                name? : string
            },
            {
                description? : string
            },
            {
                author_id? : string
            },
            {
                labels? : [
                    {
                        name? : string
                    },
                    {
                        color? : string
                    },
                ],
            },
            {
                assigned? : [
                    {
                        user_id? : string
                    },
                    {
                        spend? : number
                    },
                ]
            },
            {
                checklist? : [
                    {
                        name? : string
                    },
                    {
                        done? : boolean
                    },
                ]
            },
            {
                deadline? : number
            },
            {
                progression? : number
            },
            {
                estimated? : number
            },
            {
                priority? : string
            },
            {
                attachments? : [
                    {
                        name? : string
                    },
                    {
                        description? : string
                    },
                    {
                        path? : string
                    },
                    {
                        author_id? : string
                    },
                    {
                        date? : number
                    }
                ]
            },
            {
                comments? : [
                    {
                        author_id? : string
                    },
                    {
                        comment? : string
                    },
                    {
                        date? : number
                    }
                ]
            },
                {
                    status? : string
                }
        ]
        
    ) {}

}