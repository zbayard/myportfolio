import {List, Icon, Item} from 'semantic-ui-react'

function Links(){
    return(
        <div>
          <h1>My Social Links</h1>

        <List horizontal size='massive' align="center">
            <List.Item icon='linkedin' as='a' target='_blank' href='https://www.linkedin.com/in/zach-bayard/' />
            <List.Item icon='github' as='a' target='_blank' href='https://github.com/zbayard' />
            <List.Item icon='instagram' as='a' target='_blank' href='https://www.instagram.com/zachbayard/' />
            <List.Item icon='medium m' as='a' target='_blank' href='https://zbayard.medium.com/' />
        </List>
        </div>
    );
}

export default Links;