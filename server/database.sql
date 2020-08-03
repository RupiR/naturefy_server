CREATE DATABASE naturefy;

CREATE DATABASE users{
    user_id uuid PRIMARY KEY DEFAULT gituuid_generate_v4(),
};