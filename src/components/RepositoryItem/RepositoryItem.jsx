import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../../theme';
import DataContainer from './DataContainer/DataContainer';
import ScoreItem from './scoreItem/ScoreItem.jsx';

const RepositoryItem = ({ repository }) => {

    const styles = StyleSheet.create({
        imageStyle:{
            width: theme.imageStyle.width,
            height: theme.imageStyle.height,
            margin: 10,
            borderRadius: 8
        },
        cardContainer: {
            borderRadius: 5,
            backgroundColor: '#FDFDFE',
            margin: 10,
            
        },
        scoreContainer: {
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 15,
        },
        identityMain: {
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'space-between'
        }
      });

    return (
        <View style={styles.cardContainer}>
            <View style={styles.identityMain}>
                <Image source={{ uri: repository.ownerAvatarUrl }} alt='didnt Work' style={styles.imageStyle} />
                <DataContainer
                    fullName={ repository.fullName  || null }
                    description={ repository.description  || null }
                    language={ repository.language  || null }
                />
            </View>

            <View style={styles.scoreContainer}>
                <ScoreItem scoreNumber={repository.stargazersCount || null} descriptionText={'Stars'} />
                <ScoreItem scoreNumber={repository.stargazersCount || null} descriptionText={'Forks'} />
                <ScoreItem scoreNumber={repository.reviewCount || null} descriptionText={'Reviews'} />
                <ScoreItem scoreNumber={repository.ratingAverage || null} descriptionText={'Rating'} />
            </View>
        </View>
    );
};

export default RepositoryItem;
