using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.Application.Cqrs
{
    public sealed class QueryProcessor : IQueryProcessor, ISingletonDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public QueryProcessor(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task<TResult> Process<TResult>(IQuery<TResult> query)
        {
            if (query == null) throw new ArgumentNullException("query");

            var handlerType = typeof(IQueryHandler<,>).MakeGenericType(query.GetType(), typeof(TResult));
            dynamic handler = _serviceProvider.GetService(handlerType);

            return await handler.Handle((dynamic)query);
        }
    }
}
