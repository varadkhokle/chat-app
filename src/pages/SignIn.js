import React from 'react'
import firebase from 'firebase/compat/app';
import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite'

import { auth, database } from '../misc/firebase'

export const SignIn = () => {

    const onGoogleSignIn = () => {
        signInWithProvider(new firebase.auth.GoogleAuthProvider());
    }

    const onFacebookSignIn=()=>{
        signInWithProvider(new firebase.auth.FacebookAuthProvider());

    }
    const signInWithProvider = async (provider) => {


        try {
            const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

            if (additionalUserInfo.isNewUser) {
                await database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,
                });
            }
            Alert.success('Signed in Successfully', 4000);
        }
        catch (err) {
            console.log(err);
            Alert.info(err.message, 4000);
        }

    };



    return <Container>

        <Grid className="mt-page">
            <Row>

                <Col xs={24} md={12} mdOffset={6}>
                    <Panel>
                        <div className="text-center">
                            <h2>
                                Welcome to Chat
                            </h2>
                            <p>
                                Progressive chat platform for neophytes
                            </p>
                        </div>
                        <div className="mt-3">
                            <Button block color="orange" onClick={onGoogleSignIn} >
                                <Icon className="mr-2" icon="google" ></Icon>
                                Continue with Google
                            </Button>
                            <Button block color="blue" onClick={onFacebookSignIn}>
                                <Icon className="mr-2" icon="facebook" ></Icon>
                                Continue with Facebook
                            </Button>
                        </div>
                    </Panel>
                </Col>
            </Row>
        </Grid>
    </Container>

}
