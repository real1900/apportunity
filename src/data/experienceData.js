import apple from '../assets/svg/experience/apple.svg';
import android from '../assets/svg/experience/android.svg';
import flutter from '../assets/svg/experience/flutter.svg';
import reactNative from '../assets/svg/experience/reactNative.svg';

export const experienceData = {
    title : "Expertise",
    description:  "We specialize in building all major mobile platforms for native iOS and Android , as well as cross-platform experiences using React, React Native and Flutter. ",
    types : 
    [{
        id: 1,
        company: 'Native iOS Development',
        jobtitle: 'Objective-C , Swift',
        icon: apple
    },
    {
        id: 2,
        company: 'Native Android Development',
        jobtitle: 'Kotlin, JAVA',
        icon: android
    },
    {
        id: 3,
        company: 'Cross Platform iOS, Android, Web & Desktop Development',
        jobtitle: ' Flutter',
        icon: flutter,
    },
    {
        id: 4,
        company: 'Cross Platform iOS & Android Development',
        jobtitle: 'React Native',
        icon: reactNative
    }]
}