const utils = require('../src/utils.js')

describe('getAppliedJobs',()=>{
    test('test 1', () => {
        let candidateId = "abc123@gmail.com"

        let jobsList = [{
            id:'1',
            company_id:"company_1",
            title:"Full stack engineer",
            skills:['javascript','python','node.js'],
            years_of_experience_required:2,
            candidates:["bob@abc.com","joe@def.com","abc123@gmail.com"],
            qualified:["bob@abc.com"]
        },
        {
            id:'2',
            company_id:"company_1",
            title:"Backend engineer",
            skills:['java','C#','node.js'],
            years_of_experience_required:4,
            candidates:["sally@abc.com","frank@def.com","abc123@gmail.com"],
            qualified:[]
        },
        {
            id:'3',
            company_id:"company_2",
            title:"Front end engineer",
            skills:['javascript','React','graphQL'],
            years_of_experience_required:0,
            candidates:["bob@abc.com","joe@def.com"],
            qualified:["bob@abc.com"]
        }]
        expect(utils.getAppliedJobs(candidateId,jobsList)).toEqual([{
            id:'1',
            company_id:"company_1",
            title:"Full stack engineer",
            skills:['javascript','python','node.js'],
            years_of_experience_required:2,
            candidates:["bob@abc.com","joe@def.com","abc123@gmail.com"],
            qualified:["bob@abc.com"]
        },
        {
            id:'2',
            company_id:"company_1",
            title:"Backend engineer",
            skills:['java','C#','node.js'],
            years_of_experience_required:4,
            candidates:["sally@abc.com","frank@def.com","abc123@gmail.com"],
            qualified:[]
        }])

    })
})

describe('searchJobs',()=>{
    test('test 1', () => {
        let searchQuery = "javascript"

        let jobsList = [{
            id:'1',
            company_id:"company_1",
            title:"Full stack engineer",
            skills:['javascript','python','node.js'],
            years_of_experience_required:2,
            candidates:["bob@abc.com","joe@def.com","abc123@gmail.com"],
            qualified:["bob@abc.com"]
        },
        {
            id:'2',
            company_id:"company_1",
            title:"Backend engineer",
            skills:['java','C#','node.js'],
            years_of_experience_required:4,
            candidates:["sally@abc.com","frank@def.com","abc123@gmail.com"],
            qualified:[]
        },
        {
            id:'3',
            company_id:"company_2",
            title:"Front end engineer",
            skills:['javascript','React','graphQL'],
            years_of_experience_required:0,
            candidates:["bob@abc.com","joe@def.com"],
            qualified:["bob@abc.com"]
        }]

        expect(utils.searchJobs(searchQuery,jobsList)).toEqual([{
            id:'1',
            company_id:"company_1",
            title:"Full stack engineer",
            skills:['javascript','python','node.js'],
            years_of_experience_required:2,
            candidates:["bob@abc.com","joe@def.com","abc123@gmail.com"],
            qualified:["bob@abc.com"]
        },{
            id:'3',
            company_id:"company_2",
            title:"Front end engineer",
            skills:['javascript','React','graphQL'],
            years_of_experience_required:0,
            candidates:["bob@abc.com","joe@def.com"],
            qualified:["bob@abc.com"]
        }])
        
    })
})

describe('filterCandidates',()=>{
    test('test 1', () => {
        let candidate = {
            id:"gwilliams@abc.com",
            full_name:"Greg Williams",
            password:"2f4a9d908x",
            skills:["java","C#",'node.js'],
            years_of_experience:5

        }
        let job = {
            id:'2',
            company_id:"company_1",
            title:"Backend engineer",
            skills:['java','C#','node.js'],
            years_of_experience_required:4,
            candidates:["sally@abc.com","frank@def.com","abc123@gmail.com"],
            qualified:[]
        }
        expect(utils.filterCandidate(candidate,job)).toEqual({
            id:'2',
            company_id:"company_1",
            title:"Backend engineer",
            skills:['java','C#','node.js'],
            years_of_experience_required:4,
            candidates:["sally@abc.com","frank@def.com","abc123@gmail.com","gwilliams@abc.com"],
            qualified:["gwilliams@abc.com"]
        })
        
    })
})