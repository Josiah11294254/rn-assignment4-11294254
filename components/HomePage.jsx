import React from 'react';
import { View, Text, TextInput,  FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const HomePage = ({ route }) => {
    const { name, email } = route.params;

    const featuredJobs = [
        { id: '1', bgColor: '#5386e4', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: <Icon name="logo-facebook" size={40} color="blue" /> },
        
    { id: '2', bgColor: '#ff5733', title: 'Data Scientist', company: 'Google', salary: '$160,000', location: 'California, US', logo: <MaterialCommunityIcons name="google" size={40} color="#DB4437" /> },

    { id: '3', bgColor: '#33ff57', title: 'Front-end Developer', company: 'Apple', salary: '$150,000', location: 'New York, US', logo: <Icon name="logo-apple" size={40} color="black" /> },

    { id: '4', bgColor: '#f1c40f', title: 'Backend Developer', company: 'Microsoft', salary: '$170,000', location: 'Seattle, US', logo: <MaterialCommunityIcons name="microsoft" size={40} color="#00A4EF" /> },

    { id: '5', bgColor: '#e74c3c', title: 'Data Analyst', company: 'Amazon', salary: '$155,000', location: 'Austin, US', logo: <MaterialCommunityIcons name="cart" size={40} color="#FF9900" /> },

    { id: '6', bgColor: '#8e44ad', title: 'Machine Learning Engineer', 
        company: 'IBM', salary: '$165,000', location: 'San Francisco, US', logo: <MaterialCommunityIcons name="laptop" size={40} color="#054ADA" /> },

    { id: '7', bgColor: '#3498db', title: 'Cloud Engineer', company: 'Oracle', salary: '$175,000', location: 'Boston, US', logo: <MaterialCommunityIcons name="database" size={40} color="#F80000" /> },

    { id: '8', bgColor: '#2ecc71', title: 'DevOps Engineer', company: 'Netflix', salary: '$180,000', location: 'Los Angeles, US', logo: <MaterialCommunityIcons name="netflix" size={40} color="#E50914" /> },
    ];

    const popularJobs = [
        { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', img: <MaterialCommunityIcons name="hamburger" size={30} color="orange" /> },
        { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', img: <MaterialCommunityIcons name="headphones" size={30} color="purple" /> },
        { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', img: <Icon name="logo-facebook" size={40} color="blue" /> },
        { id: '4', title: 'Product Manager', company: 'Github', salary: '$86,000/y', location: 'Florida, US', img: <Icon name="logo-github" size={40} color="black" /> },
        { id: '5', title: 'Graphic Designer', company: 'Adobe', salary: '$70,000/y', location: 'New York, US', img: <MaterialCommunityIcons name="palette" size={30} color="black" /> },
        { id: '6', title: 'Marketing Specialist', company: 'Nike', salary: '$65,000/y', location: 'Portland, US', img: <MaterialCommunityIcons name="key" size={30} color="black" /> },
        { id: '7', title: 'Customer Service', company: 'Amazon', salary: '$50,000/y', location: 'Seattle, US', img: <MaterialCommunityIcons name="shopping" size={30} color="black" /> },
        { id: '8', title: 'Finance Manager', company: 'Goldman Sachs', salary: '$120,000/y', location: 'New York, US', img: <MaterialCommunityIcons name="bank" size={30} color="black" /> },
    ];

    const renderFeaturedJob = ({ item }) => (
        <LinearGradient colors={[item.bgColor, item.bgColor]} style={styles.featuredJobCard}>
            <View style={styles.featuredJobRow}>
                <TouchableOpacity style={styles.socialButton}>
                    {item.logo}
                </TouchableOpacity>
                <View>
                    <Text style={styles.featuredJobTitle}>{item.company}</Text>
                    <Text style={styles.featuredJobLocation}>{item.title}</Text>
                </View>
            </View>
            <View style={styles.featuredJobRow}>
                <Text style={styles.featuredJobTitle}>{item.salary}</Text>
                <Text style={styles.featuredJobLocation}>{item.location}</Text>
            </View>
        </LinearGradient>
    );

    const renderPopularJob = ({ item }) => (
        <View style={styles.popularJobCard}>
            <View style={styles.popularJobRow}>
                <View style={styles.socialButton}>
                    {item.img}
                </View>
                <View>
                    <Text style={styles.popularJobTitle}>{item.title}</Text>
                    <Text style={styles.popularJobCompany}>{item.company}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.popularJobSalary}>{item.salary}</Text>
                <Text style={styles.popularJobLocation}>{item.location}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userEmail}>{email}</Text>
                </View>
               <View style={{height:60,width:60, display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'white', borderRadius:100}}>
               <Text style={{fontSize:40}}>👲</Text>
               </View>
            </View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Search a job or position" />
                <TouchableOpacity style={styles.searchIcon}>
                    <Icon name="filter" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Featured Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.sectionSeeAll}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                data={featuredJobs}
                renderItem={renderFeaturedJob}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalList}
                // contentContainerStyle={styles.horizontalList}
            />
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Popular Jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.sectionSeeAll}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={popularJobs}
                renderItem={renderPopularJob}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                style={{marginTop:30}}
               
                
            />
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        padding: 20,
        marginTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    socialButton: {
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#fff',
        elevation: 2,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    userEmail: {
        fontSize: 14,
        color: '#666',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        elevation: 2,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchInput: {
        width:'80%',
        marginRight:20,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    searchIcon: {
        marginLeft: 10,
        backgroundColor:'#fff',
        padding:6,
        borderRadius:10
    },
    image: {
        width: 30,
        height: 30,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    sectionSeeAll: {
        fontSize: 14,
        color: '#007bff',
    },
    horizontalList: {
        // marginBottom: 20,
    },
    featuredJobCard: {
        width: 250,
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        padding:20,
        gap:40,
        // justifyContent: 'space-between',
        elevation: 2,
        
    },
    featuredJobRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        // paddingBottom:50,
        // height:100,
    },
    // featuredJobRow1: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     gap: 10,
    //     marginBottom:50
    // },
    featuredJobTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    featuredJobCompany: {
        fontSize: 14,
        color: '#fff',
    },
    featuredJobSalary: {
        fontSize: 14,
        color: '#fff',
    },
    featuredJobLocation: {
        fontSize: 14,
        color: '#fff',
    },
    popularJobCard: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    popularJobRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    popularJobTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    popularJobCompany: {
        fontSize: 12,
        color: '#666',
    },
    popularJobSalary: {
        fontSize: 14,
        color: '#333',
        textAlign: 'right',
    },
    popularJobLocation: {
        fontSize: 14,
        color: '#666',
        textAlign: 'right',
    },
});

export default HomePage;
