import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

import { 
    Container,
    Row,
    Col,
    Button,
    InputGroup,
    Input,
    InputGroupAddon,
    Nav,
    NavItem,
    NavLink,
    Badge,
    Media,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    ButtonGroup,
} from './../../components';

import ProjectsList from './ProjectsList';
import ProjectsGrid from './ProjectsGrid';
import {
    ProjectsLeftNav
} from "../components/ProjectsLeftNav";
import {
    ProjectsSmHeader
} from "../components/ProjectsSmHeader";


const Projects = (props) => (
    <React.Fragment>
        <Container>
            <Row>
                <Col lg={ 3 }>
                    <ProjectsLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader />

                    { 
                        props.match.params.type === "list" ?
                            <ProjectsList /> :
                            <ProjectsGrid />
                    }
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);
Projects.propTypes = {
    match: PropTypes.object.isRequired
};


export default Projects;