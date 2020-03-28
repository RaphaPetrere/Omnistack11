import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation  } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail(){

    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha Atropelada" com o valor de R$ 120,00';

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject : 'Herói do caso: Semana Omnistack 11',
            recipients : ['diego@rocketseat.com'],
            body : message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5511970745906&text=${message}`);
        //app, o metodo q quer realizar, o telefone (55 11 numero), &text com a mensagem
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop : 0}]}>ONG: </Text>
                <Text style={styles.incidentValue}>ABBY: </Text>

                <Text style={styles.incidentProperty}>CASO: </Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada: </Text>

                <Text style={styles.incidentProperty}>VALOR: </Text>
                <Text style={styles.incidentValue}>R$ 120,00 </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle} >Salve o dia!</Text>
                <Text style={styles.heroTitle} >Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato: </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}