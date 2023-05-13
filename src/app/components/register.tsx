import React, { useState } from 'react';

type RegisterForm = {
    firstname: string;
    middleinitial: string;
    lastname: string;
    suffix?: string;
    gender: string;
    birthdate: string;
    
}